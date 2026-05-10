# Proto Working Process (Trust Source = protobuf)

## 1) What should you do after updating proto files?

```text
go-api/proto (your latest updates)
          |
          | sync to
          v
protobuf/proto (single source of truth)
```

Sync command:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github
rsync -av --delete go-api/proto/ protobuf/proto/
```

After syncing, all build and publish steps should be done in the `protobuf` repository.

---

## 2) Local build for NodeJS and Golang

```text
protobuf/proto
    |------------------> build_proto_node.sh --> build/ (TS stubs) + docs/
    |
    |------------------> build_proto_go.sh ----> gen/go/ (Go stubs)
```

Build commands:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/protobuf

# Build NodeJS protobuf
yarn build:proto:node

# Build Golang protobuf
yarn build:proto:go

# Build both
yarn build:proto
```

Output meaning:

- `build/`: generated code for NodeJS apps (consumed by demo-bff)
- `gen/go/`: generated code for Go apps (consumed by go-api)
- `docs/proto-docs.md`: generated proto documentation

---

## 3) How publishing to GitHub works

### 3.1 CI verification on push/PR to main

Workflow: `.github/workflows/proto-ci.yml`

```text
Push/PR to main
    -> checkout
    -> setup node + go + protoc + buf
    -> buf lint
    -> yarn build:proto:node
    -> yarn build:proto:go
    -> PASS/FAIL
```

If CI fails, fix proto files or scripts before merging.

### 3.2 Publish when creating a tag

Workflow: `.github/workflows/publish.yml`

Trigger:

```text
git push origin vX.Y.Z
```

Publish pipeline:

```text
Tag vX.Y.Z
    |
    |-- Job publish-nodejs-package
    |     -> build Node package
    |     -> npm publish to GitHub Packages
    |     -> available at @lamquangmanh/protobuf@vX.Y.Z
    |
    |-- Job publish-go-package
          -> generate Go stubs (gen/go)
          -> verify gen/go/go.mod for pkg.go.dev
          -> pkg.go.dev auto-indexes tag
          -> available at github.com/lamquangmanh/protobuf/gen/go@vX.Y.Z
```

---

## 4) How application teams consume artifacts

### NodeJS app (demo-bff)

```text
Version published to GitHub Packages (@lamquangmanh/protobuf)
    |
    v
Install via npm install @lamquangmanh/protobuf@vX.Y.Z
    |
    v
Import generated TS protobuf code from node_modules
    |
    v
Use in BFF application
```

### Golang app (go-api)

```text
Version published to pkg.go.dev (github.com/lamquangmanh/protobuf/gen/go@vX.Y.Z)
    |
    v
Update go.mod: go get github.com/lamquangmanh/protobuf/gen/go@vX.Y.Z
    |
    v
Import generated Go protobuf code from go module
    |
    v
Use in Go API service
```

---

## 5) Quick checklist for every proto update

**Proto Repository (protobuf/):**

```text
[ ] Sync go-api/proto -> protobuf/proto (if updates came from go-api)
[ ] Run yarn build:proto (generates build/ and gen/go/)
[ ] Check artifacts: build/, gen/go/, docs/proto-docs.md
[ ] Commit changes to proto/
[ ] Push branch and open PR to main
[ ] After PR merged, create tag vX.Y.Z
[ ] Push tag: git push origin vX.Y.Z
[ ] Verify publish workflow succeeds (both Node and Go jobs)
```

**Consumer Apps:**

```text
[ ] demo-bff: npm install @lamquangmanh/protobuf@vX.Y.Z
[ ] demo-bff: Verify TypeScript compiles (yarn build)
[ ] demo-bff: Update import paths if message types changed
[ ] demo-bff: Run tests (yarn test)

[ ] go-api: go get github.com/lamquangmanh/protobuf/gen/go@vX.Y.Z
[ ] go-api: go mod tidy
[ ] go-api: Verify Go compiles (make build)
[ ] go-api: Update import paths if message types changed
[ ] go-api: Run tests (make test)
```

---

## 6) Update consumer apps after proto publish

### 6.1 Update demo-bff (Node.js app)

After new tag is published to GitHub Packages:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/demo-bff

# Update package.json with new version
npm install @lamquangmanh/protobuf@latest

# Or specify exact version
npm install @lamquangmanh/protobuf@vX.Y.Z
```

Then update imports and references in code:

```typescript
// Check for message name changes in generated code
import { CreateUserRequest, CreateUserResponse } from '@lamquangmanh/protobuf';

// Update handlers/services to use new message types
// Search for old message names and replace with new ones
```

**Key points:**

- Generated TS files located in `node_modules/@lamquangmanh/protobuf/build/proto/`
- Check for breaking changes (renamed messages, new required fields)
- Rebuild and test services after updating

### 6.2 Update go-api (Go app)

After a new tag is pushed, update go-api to the matching Go module version from `protobuf/gen/go`:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/go-api

# Pin to a specific proto version
go get github.com/lamquangmanh/protobuf/gen/go@vX.Y.Z

# Or always use the latest published version
go get github.com/lamquangmanh/protobuf/gen/go@latest

# Refresh module metadata
go mod tidy
```

Then update imports and references in code:

```go
import userv1 "github.com/lamquangmanh/protobuf/gen/go/proto/user/v1"

// Use generated types from the versioned module
req := &userv1.CreateUserRequest{}
```

**Key points:**

- The canonical Go module is `github.com/lamquangmanh/protobuf/gen/go`
- Versioning follows the protobuf repo tag, for example `v0.0.39`
- No manual copying from `gen/go/` into go-api is needed
- Rebuild and test go-api after bumping the module version

### 6.3 Verify compatibility

After updating both apps:

```bash
# demo-bff: Compile TypeScript
cd /Users/jun/Documents/Projects/lamquangmanh-github/demo-bff
yarn build

# go-api: Build Go binary
cd /Users/jun/Documents/Projects/lamquangmanh-github/go-api
make build

# Run tests to verify RPC calls still work
cd /Users/jun/Documents/Projects/lamquangmanh-github/demo-bff
yarn test

cd /Users/jun/Documents/Projects/lamquangmanh-github/go-api
make test
```

If compilation errors occur, check the proto changelog for breaking changes and update the Go imports or request/response types accordingly.

---

## 7) Publish Go bindings to pkg.go.dev (Auto-registration)

The `gen/go/` folder already contains a `go.mod` with proper module path. When you push tags to GitHub, **pkg.go.dev automatically indexes and registers it** - no separate repository needed!

### 7.1 How it works

```text
protobuf repo (single source)
    |
    |-- gen/go/go.mod (module: github.com/lamquangmanh/protobuf/gen/go)
    |
    |-- tag v0.0.1 pushed
         |
         v
    GitHub detects tag
         |
         v
    pkg.go.dev auto-indexes
         |
         v
    Available at: github.com/lamquangmanh/protobuf/gen/go@v0.0.1
```

### 7.2 In go-api: use with versioning

Simply add to `go-api/go.mod`:

```go
require github.com/lamquangmanh/protobuf/gen/go v0.0.1
```

Or get latest:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/go-api

# Update to specific version
go get github.com/lamquangmanh/protobuf/gen/go@v0.0.1

# Or always latest
go get github.com/lamquangmanh/protobuf/gen/go@latest

# Verify and update go.sum
go mod tidy
```

Then import in code:

```go
import "github.com/lamquangmanh/protobuf/gen/go/proto/user/v1"

// Use generated types
req := &user.CreateUserRequest{}
```

### 7.3 Publishing to pkg.go.dev

Publishing is **automatic**! When you create a tag:

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/protobuf

# Generate Go code
yarn build:proto:go

# Commit changes
git add gen/go/
git commit -m "Update proto bindings for v0.0.2"

# Create and push tag
git tag v0.0.2
git push origin main --tags
```

The GitHub Actions workflow:

1. Runs proto lint/build verification
2. Publishes Node package to npm
3. Uploads Go artifacts to GitHub Release
4. pkg.go.dev **automatically discovers and indexes** the tag

Within a few minutes, it will be available at:

- https://pkg.go.dev/github.com/lamquangmanh/protobuf/gen/go@v0.0.2

### 7.4 Benefits of this approach

✅ **Single source of truth** - One protobuf repo, one version tag
✅ **Same versioning for Node + Go** - Synchronized releases
✅ **Automatic discovery** - pkg.go.dev indexes on tag push
✅ **No extra repos** - Cleaner maintenance
✅ **Semantic versioning** - Easy pinning across teams
✅ **Go module resolution** - Works natively with `go get` and `go.mod`

### 7.5 Troubleshooting

If pkg.go.dev doesn't show new version:

```bash
# Verify go.mod syntax in gen/go
cd /Users/jun/Documents/Projects/lamquangmanh-github/protobuf/gen/go
go mod tidy

# Check module name
head -1 go.mod
# Should be: module github.com/lamquangmanh/protobuf/gen/go

# Verify tag exists
cd /Users/jun/Documents/Projects/lamquangmanh-github/protobuf
git tag -l | grep v0.0

# Force pkg.go.dev reindex
# Visit: https://pkg.go.dev/github.com/lamquangmanh/protobuf/gen/go@v0.0.1?tab=doc
# (the site will reindex on page load)
```
