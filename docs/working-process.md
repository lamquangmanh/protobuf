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
    |-- Job publish-node
    |     -> build Node package
    |     -> npm publish to GitHub Packages
    |
    |-- Job release-go-artifacts
          -> generate Go stubs (gen/go)
          -> attach gen/go to GitHub Release for that tag
```

---

## 4) How application teams consume artifacts

### NodeJS app (demo-bff)

```text
Install package from GitHub Packages
-> import generated TS protobuf code
-> use in BFF
```

### Golang app (go-api)

```text
Get generated code from gen/go (repo or release artifact)
-> import generated Go package
-> compile Go service
```

---

## 5) Quick checklist for every proto update

```text
[ ] Sync go-api/proto -> protobuf/proto
[ ] Run yarn build:proto
[ ] Check build/, gen/go/, docs/
[ ] Commit + push branch
[ ] Open PR to main (CI verify)
[ ] Create tag vX.Y.Z to publish
[ ] Update demo-bff with new generated code
[ ] Update go-api with new generated code
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

After new tag is published to GitHub Release:

**Option A: Pull latest from protobuf repo**

```bash
cd /Users/jun/Documents/Projects/lamquangmanh-github/protobuf

# Get latest gen/go artifacts
git pull origin main

# Check generated files
ls -la gen/go/proto/
```

Then copy to go-api or reference as Go module.

**Option B: Copy gen/go/ artifacts to go-api**

```bash
# Copy generated Go stubs
cp -r /Users/jun/Documents/Projects/lamquangmanh-github/protobuf/gen/go/proto/ \
      /Users/jun/Documents/Projects/lamquangmanh-github/go-api/pkg/proto/

# Run go mod tidy to update dependencies
cd /Users/jun/Documents/Projects/lamquangmanh-github/go-api
go mod tidy
```

Then update handlers/services in code:

```go
// Check for message struct changes in generated code
import "github.com/lamquangmanh/go-api/pkg/proto/user/v1"

// Update handlers to use new message types
// Search for old message names and replace with new ones
```

**Key points:**

- Generated Go files located in `gen/go/proto/`
- Each proto package generates `*.pb.go` and `*_grpc.pb.go` files
- Check go.mod for protobuf dependency compatibility
- Rebuild and test services after updating

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

If compilation errors occur, check proto changelog for breaking changes and update code accordingly.

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
