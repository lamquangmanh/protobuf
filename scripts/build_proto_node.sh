#!/usr/bin/env bash
set -euo pipefail

rm -rf ./build
mkdir -p ./build

# Clean incremental build cache
rm -f ./tsconfig.tsbuildinfo

PROTO_FILES=$(find proto -name "*.proto" | sort)

protoc \
  -I=. \
  --plugin="$(pwd)/node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=stripEnumPrefix=false \
  --ts_proto_out="./build" \
  ${PROTO_FILES}

if command -v protoc-gen-doc >/dev/null 2>&1; then
  protoc \
    -I=. \
    --plugin="$(pwd)/node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=stripEnumPrefix=false \
    --doc_out=./docs \
    --doc_opt=markdown,proto-docs.md \
    ${PROTO_FILES}
else
  echo "protoc-gen-doc not found, skipping docs generation"
fi

echo "Generated NodeJS protobuf artifacts and docs successfully"
