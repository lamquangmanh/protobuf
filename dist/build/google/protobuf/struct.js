"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.NullValue = exports.protobufPackage = void 0;
exports.nullValueFromJSON = nullValueFromJSON;
exports.nullValueToJSON = nullValueToJSON;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "google.protobuf";
var NullValue;
(function (NullValue) {
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue || (exports.NullValue = NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        case NullValue.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStruct() {
    return { fields: {} };
}
exports.Struct = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        Object.entries(message.fields).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.Struct_FieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).join();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
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
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            const entries = Object.entries(message.fields);
            if (entries.length > 0) {
                obj.fields = {};
                entries.forEach(([k, v]) => {
                    obj.fields[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.Struct.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStruct();
        message.fields = Object.entries(object.fields ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            for (const key of Object.keys(object)) {
                struct.fields[key] = object[key];
            }
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        if (message.fields) {
            for (const key of Object.keys(message.fields)) {
                object[key] = message.fields[key];
            }
        }
        return object;
    },
};
function createBaseStruct_FieldsEntry() {
    return { key: "", value: undefined };
}
exports.Struct_FieldsEntry = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct_FieldsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
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
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object?.value) ? object.value : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Struct_FieldsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStruct_FieldsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseValue() {
    return {
        nullValue: undefined,
        numberValue: undefined,
        stringValue: undefined,
        boolValue: undefined,
        structValue: undefined,
        listValue: undefined,
    };
}
exports.Value = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.structValue), writer.uint32(42).fork()).join();
        }
        if (message.listValue !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.listValue), writer.uint32(50).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.nullValue = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 17) {
                        break;
                    }
                    message.numberValue = reader.double();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.stringValue = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.boolValue = reader.bool();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.structValue = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.listValue = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
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
            nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
            numberValue: isSet(object.numberValue) ? globalThis.Number(object.numberValue) : undefined,
            stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
            boolValue: isSet(object.boolValue) ? globalThis.Boolean(object.boolValue) : undefined,
            structValue: isObject(object.structValue) ? object.structValue : undefined,
            listValue: globalThis.Array.isArray(object.listValue) ? [...object.listValue] : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nullValue !== undefined) {
            obj.nullValue = nullValueToJSON(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            obj.numberValue = message.numberValue;
        }
        if (message.stringValue !== undefined) {
            obj.stringValue = message.stringValue;
        }
        if (message.boolValue !== undefined) {
            obj.boolValue = message.boolValue;
        }
        if (message.structValue !== undefined) {
            obj.structValue = message.structValue;
        }
        if (message.listValue !== undefined) {
            obj.listValue = message.listValue;
        }
        return obj;
    },
    create(base) {
        return exports.Value.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValue();
        message.nullValue = object.nullValue ?? undefined;
        message.numberValue = object.numberValue ?? undefined;
        message.stringValue = object.stringValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        message.structValue = object.structValue ?? undefined;
        message.listValue = object.listValue ?? undefined;
        return message;
    },
    wrap(value) {
        const result = createBaseValue();
        if (value === null) {
            result.nullValue = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.boolValue = value;
        }
        else if (typeof value === "number") {
            result.numberValue = value;
        }
        else if (typeof value === "string") {
            result.stringValue = value;
        }
        else if (globalThis.Array.isArray(value)) {
            result.listValue = value;
        }
        else if (typeof value === "object") {
            result.structValue = value;
        }
        else if (typeof value !== "undefined") {
            throw new globalThis.Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap(message) {
        if (message.stringValue !== undefined) {
            return message.stringValue;
        }
        else if (message?.numberValue !== undefined) {
            return message.numberValue;
        }
        else if (message?.boolValue !== undefined) {
            return message.boolValue;
        }
        else if (message?.structValue !== undefined) {
            return message.structValue;
        }
        else if (message?.listValue !== undefined) {
            return message.listValue;
        }
        else if (message?.nullValue !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
exports.ListValue = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.values) {
            exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
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
        return { values: globalThis.Array.isArray(object?.values) ? [...object.values] : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.values?.length) {
            obj.values = message.values;
        }
        return obj;
    },
    create(base) {
        return exports.ListValue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListValue();
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
    wrap(array) {
        const result = createBaseListValue();
        result.values = array ?? [];
        return result;
    },
    unwrap(message) {
        if (message?.hasOwnProperty("values") && globalThis.Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=struct.js.map