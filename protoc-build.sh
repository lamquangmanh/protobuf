#!/bin/bash

PROTOC_GEN_TS_PROTO="./node_modules/.bin/protoc-gen-ts_proto"
PROTO_DIR="./proto"
OUT_DIR="./proto/generated"
PROTOC="./node_modules/.bin/protoc"

# Create the output directory if it doesn't exist
mkdir -p $OUT_DIR

# Compile the proto files
$PROTOC \
  --plugin=protoc-gen-ts_proto=$PROTOC_GEN_TS_PROTO \
  --ts_proto_out=$OUT_DIR \
  --proto_path=$PROTO_DIR \
  $PROTO_DIR/*.proto

echo "Proto files generated in $OUT_DIR"
