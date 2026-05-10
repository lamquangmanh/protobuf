#!/usr/bin/env bash
set -euo pipefail

export PATH="$(go env GOPATH)/bin:${PATH}"

command -v buf >/dev/null 2>&1 || {
  echo "buf is required. Install: brew install bufbuild/buf/buf"
  exit 1
}

command -v protoc-gen-go >/dev/null 2>&1 || {
  echo "protoc-gen-go is required. Install: go install google.golang.org/protobuf/cmd/protoc-gen-go@latest"
  exit 1
}

command -v protoc-gen-go-grpc >/dev/null 2>&1 || {
  echo "protoc-gen-go-grpc is required. Install: go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest"
  exit 1
}

buf generate --template buf.gen.go.yaml

if [ -f "gen/go/go.mod" ]; then
  (cd gen/go && go mod tidy)
fi

echo "Generated Go protobuf artifacts successfully"
