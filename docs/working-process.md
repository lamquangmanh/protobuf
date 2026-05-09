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
```
