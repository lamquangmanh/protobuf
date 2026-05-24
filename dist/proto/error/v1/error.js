"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorList = exports.ErrorItem = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_1 = require("../../../google/protobuf/struct");
exports.protobufPackage = "proto.error.v1";
function createBaseErrorItem() {
    return { code: 0, message: "", extraData: undefined };
}
exports.ErrorItem = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.extraData !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.extraData), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.extraData = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            code: isSet(object.code) ? globalThis.Number(object.code) : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            extraData: isObject(object.extraData) ? object.extraData : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.extraData !== undefined) {
            obj.extraData = message.extraData;
        }
        return obj;
    },
    create(base) {
        return exports.ErrorItem.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseErrorItem();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.extraData = object.extraData ?? undefined;
        return message;
    },
};
function createBaseErrorList() {
    return { errors: [] };
}
exports.ErrorList = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.errors) {
            exports.ErrorItem.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.errors.push(exports.ErrorItem.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e) => exports.ErrorItem.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.errors?.length) {
            obj.errors = message.errors.map((e) => exports.ErrorItem.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ErrorList.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseErrorList();
        message.errors = object.errors?.map((e) => exports.ErrorItem.fromPartial(e)) || [];
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=error.js.map