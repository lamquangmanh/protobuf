# Protobuf Build Scripts

These scripts are part of the protobuf build pipeline and should be run from the project root directory via npm/yarn scripts.

## Scripts

### `build_proto_node.sh`

Generates TypeScript/JavaScript protobuf artifacts from `.proto` files using `ts-proto`.

**Run via:** `yarn build:proto:node`

**What it does:**

- Cleans previous build artifacts (`./build`)
- Clears TypeScript incremental build cache
- Compiles all `.proto` files to TypeScript in `./build/proto/`
- Generates documentation if `protoc-gen-doc` is available

**Output:**

- `./build/proto/**/*.ts` - Generated TypeScript sources

---

### `build_proto_go.sh`

Generates Go protobuf artifacts from `.proto` files using `protoc-gen-go` and `protoc-gen-go-grpc`.

**Run via:** `yarn build:proto:go`

**What it does:**

- Compiles all `.proto` files to Go in `./gen/go/`
- Generates gRPC service code

**Output:**

- `./gen/go/proto/**/*.pb.go` - Generated Go protobuf code

---

### `generate-barrel-exports.sh`

Auto-generates barrel exports (index.d.ts and index.js) for TypeScript and JavaScript distributions.

**Run via:** `yarn generate:barrel`

**What it does:**

- Scans `./dist/proto/` recursively for all `.d.ts` and `.js` files
- Generates `./dist/index.d.ts` and `./dist/index.js`
- Automatically exports all proto modules at the package root
- Supports any proto version (v1, v2, v3, etc.)

**Output:**

- `./dist/index.d.ts` - TypeScript type exports (auto-generated)
- `./dist/index.js` - JavaScript module exports (auto-generated)

---

## Full Pipeline

The complete build pipeline is defined in `package.json`:

```json
"build:proto": "yarn build:proto:node && yarn build:ts && yarn build:proto:go && yarn generate:barrel"
```

This runs:

1. Generate TypeScript sources from proto files
2. Compile TypeScript to JavaScript (tsc)
3. Generate Go code from proto files
4. Generate barrel exports for distribution

---

## Notes

- **Working Directory:** All scripts use relative paths based on the project root directory
- **Proto Files:** Place `.proto` files in `proto/*/v*/*.proto` structure
- **Automatic Exports:** Adding new proto files automatically updates barrel exports on next build
- **No Manual Edits:** Never edit `dist/index.d.ts` or `dist/index.js` directly - they are auto-generated
