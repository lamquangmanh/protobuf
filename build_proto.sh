# #!/bin/bash

protoc \
    -I=proto \
    --plugin=$(pwd)/node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out="./build" \
    proto/**/**/*.proto

# -----------------------

# #!/bin/bash
# set -e

# echo "Generating TypeScript code using buf..."

# # Clean up previous output
# rm -rf build

# # Run buf generate
# buf generate

# echo "✅ Proto files compiled to ./build"
