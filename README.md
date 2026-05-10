# Protobuf Trust Source

This repository is the single source of truth for protobuf schemas used by:

- NodeJS applications (e.g. demo-bff)
- Golang applications (e.g. go-api)

## Directory layout

- `proto/`: protobuf schema definitions
- `build/`: generated TypeScript protobuf output
- `dist/`: generated TypeScript protobuf output for NodeJS application
- `gen/go/`: generated Go protobuf output
- `docs/`: generated protocol documentation and working notes
- `.github/workflows/`: CI and publish workflows

## Documentation

This repository includes documentation files under `docs/`:

- `docs/proto-docs.md`: generated protocol reference (messages, enums, services)
- `docs/working-process.md`: internal workflow and process notes
- `docs/scripts.md`: generated build proto for NodeJS and Golang

Quick links:

- [Protocol reference](docs/proto-docs.md)
- [Working process](docs/working-process.md)
- [Scripts](docs/scripts.md)

To refresh generated documentation after updating proto files:

```bash
yarn build:proto:node
```

This command regenerates both Node artifacts and `docs/proto-docs.md`.

## Local setup

1. Install dependencies

```bash
yarn install
```

2. Install Go plugins (required for Go generation)

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
```

3. Install Buf

```bash
brew install bufbuild/buf/buf
```

## Build commands

- Build Node protobuf only:

```bash
yarn build:proto:node
```

- Build Go protobuf only:

```bash
yarn build:proto:go
```

- Build both Node + Go protobuf:

```bash
yarn build:proto
```

- Build publishable Node package (TypeScript dist):

```bash
yarn build:ts
```

## Publishing

### Node package

- Package is published to GitHub Packages via workflow `publish.yml` when pushing tags `v*`.
- Ensure package scope and registry are configured in `.npmrc`.

Example:

```bash
git tag v0.0.38
git push origin v0.0.38
```

### Go artifacts

- Go protobuf artifacts are generated in `gen/go/` and attached to GitHub Release on tag push.
- Consumers can pull generated Go files from the release artifact or from repository source.

## CI

Workflow `proto-ci.yml` runs on push/PR to `main` and verifies:

- `buf lint`
- Node protobuf generation
- Go protobuf generation

## Notes

- Proto files are imported using `proto/...` paths, so generation scripts use include root `.`.
- `buf.yaml` excludes `node_modules`, `build`, `dist`, and `docs` to avoid duplicate proto symbols.
