# Protobuf

# How to build

```
yarn install
yarn run build
```

# How to install package on MAC OS or Linux, Window

```bash
For Mac OS
brew install protoc-gen-doc

If using Linux or Windows:
Download from the releases page:
https://github.com/pseudomuto/protoc-gen-doc/releases

Then move the binary to your $PATH.

Step 2:
  mkdir -p docs
```

# How to publish package

create .npmrc from .npmrc.template
update YOUR_USER_NAME and YOUR_GITHUB_TOKEN

```

npm publish --access public

```

Document of proto files
[Proto document](./docs/proto-docs.md)
