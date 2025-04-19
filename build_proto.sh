# #!/bin/bash

protoc \
    -I=proto \
    --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out="./build" \
    proto/**/**/*.proto

# -----------------------

protoc \
  -I=proto \
  --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_opt=esModuleInterop=true \
  --doc_out=./docs \
  --doc_opt=markdown,proto-docs.md \
  proto/**/**/*.proto

echo "Generating Document Markdown file successfully"
