"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleServiceClientImpl = exports.ModuleServiceServiceName = exports.CreateSuccess = exports.DeleteModuleRequest = exports.UpdateModuleRequest = exports.CreateModuleRequest = exports.GetModulesResponse = exports.GetModulesRequest = exports.GetModuleRequest = exports.UpdateModuleData = exports.CreateModuleData = exports.Module = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "module.v1";
function createBaseModule() {
    return {
        moduleId: "",
        name: "",
        description: "",
        createdAt: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        productId: undefined,
        icon: undefined,
    };
}
exports.Module = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.moduleId !== "") {
            writer.uint32(10).string(message.moduleId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.createdAt !== "") {
            writer.uint32(34).string(message.createdAt);
        }
        if (message.createdUserId !== "") {
            writer.uint32(42).string(message.createdUserId);
        }
        if (message.updatedAt !== "") {
            writer.uint32(50).string(message.updatedAt);
        }
        if (message.updatedUserId !== "") {
            writer.uint32(58).string(message.updatedUserId);
        }
        if (message.deletedAt !== "") {
            writer.uint32(66).string(message.deletedAt);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(74).string(message.deletedUserId);
        }
        if (message.productId !== undefined) {
            writer.uint32(82).string(message.productId);
        }
        if (message.icon !== undefined) {
            writer.uint32(90).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.createdAt = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.createdUserId = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.updatedUserId = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.deletedAt = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.deletedUserId = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.icon = reader.string();
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
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
            createdUserId: isSet(object.createdUserId) ? globalThis.String(object.createdUserId) : "",
            updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
            updatedUserId: isSet(object.updatedUserId) ? globalThis.String(object.updatedUserId) : "",
            deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
            deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
            productId: isSet(object.productId) ? globalThis.String(object.productId) : undefined,
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.createdAt !== "") {
            obj.createdAt = message.createdAt;
        }
        if (message.createdUserId !== "") {
            obj.createdUserId = message.createdUserId;
        }
        if (message.updatedAt !== "") {
            obj.updatedAt = message.updatedAt;
        }
        if (message.updatedUserId !== "") {
            obj.updatedUserId = message.updatedUserId;
        }
        if (message.deletedAt !== "") {
            obj.deletedAt = message.deletedAt;
        }
        if (message.deletedUserId !== "") {
            obj.deletedUserId = message.deletedUserId;
        }
        if (message.productId !== undefined) {
            obj.productId = message.productId;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.Module.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.moduleId = object.moduleId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.createdAt = object.createdAt ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        message.productId = object.productId ?? undefined;
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseCreateModuleData() {
    return { name: "", description: "", productId: undefined, icon: undefined };
}
exports.CreateModuleData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.productId !== undefined) {
            writer.uint32(26).string(message.productId);
        }
        if (message.icon !== undefined) {
            writer.uint32(34).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateModuleData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.icon = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            productId: isSet(object.productId) ? globalThis.String(object.productId) : undefined,
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.productId !== undefined) {
            obj.productId = message.productId;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.CreateModuleData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateModuleData();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.productId = object.productId ?? undefined;
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseUpdateModuleData() {
    return { moduleId: "", name: "", description: "", productId: undefined, icon: undefined };
}
exports.UpdateModuleData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.moduleId !== "") {
            writer.uint32(10).string(message.moduleId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.productId !== undefined) {
            writer.uint32(34).string(message.productId);
        }
        if (message.icon !== undefined) {
            writer.uint32(42).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateModuleData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.icon = reader.string();
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
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            productId: isSet(object.productId) ? globalThis.String(object.productId) : undefined,
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.productId !== undefined) {
            obj.productId = message.productId;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateModuleData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateModuleData();
        message.moduleId = object.moduleId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.productId = object.productId ?? undefined;
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseGetModuleRequest() {
    return { moduleId: "" };
}
exports.GetModuleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.moduleId !== "") {
            writer.uint32(10).string(message.moduleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetModuleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleId = reader.string();
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
        return { moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        return obj;
    },
    create(base) {
        return exports.GetModuleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetModuleRequest();
        message.moduleId = object.moduleId ?? "";
        return message;
    },
};
function createBaseGetModulesRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetModulesRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationRequest.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.sorts) {
            base_1.Sort.encode(v, writer.uint32(18).fork()).join();
        }
        for (const v of message.filters) {
            base_1.Filter.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetModulesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = base_1.PaginationRequest.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.sorts.push(base_1.Sort.decode(reader, reader.uint32()));
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.filters.push(base_1.Filter.decode(reader, reader.uint32()));
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
            pagination: isSet(object.pagination) ? base_1.PaginationRequest.fromJSON(object.pagination) : undefined,
            sorts: globalThis.Array.isArray(object?.sorts) ? object.sorts.map((e) => base_1.Sort.fromJSON(e)) : [],
            filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e) => base_1.Filter.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationRequest.toJSON(message.pagination);
        }
        if (message.sorts?.length) {
            obj.sorts = message.sorts.map((e) => base_1.Sort.toJSON(e));
        }
        if (message.filters?.length) {
            obj.filters = message.filters.map((e) => base_1.Filter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetModulesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetModulesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetModulesResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetModulesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Module.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetModulesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = base_1.PaginationResponse.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.data.push(exports.Module.decode(reader, reader.uint32()));
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
            pagination: isSet(object.pagination) ? base_1.PaginationResponse.fromJSON(object.pagination) : undefined,
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Module.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Module.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetModulesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetModulesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Module.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateModuleRequest() {
    return { module: undefined, userId: "" };
}
exports.CreateModuleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.module !== undefined) {
            exports.CreateModuleData.encode(message.module, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateModuleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.module = exports.CreateModuleData.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
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
            module: isSet(object.module) ? exports.CreateModuleData.fromJSON(object.module) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.module !== undefined) {
            obj.module = exports.CreateModuleData.toJSON(message.module);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateModuleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateModuleRequest();
        message.module = (object.module !== undefined && object.module !== null)
            ? exports.CreateModuleData.fromPartial(object.module)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateModuleRequest() {
    return { module: undefined, userId: "" };
}
exports.UpdateModuleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.module !== undefined) {
            exports.UpdateModuleData.encode(message.module, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateModuleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.module = exports.UpdateModuleData.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
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
            module: isSet(object.module) ? exports.UpdateModuleData.fromJSON(object.module) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.module !== undefined) {
            obj.module = exports.UpdateModuleData.toJSON(message.module);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateModuleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateModuleRequest();
        message.module = (object.module !== undefined && object.module !== null)
            ? exports.UpdateModuleData.fromPartial(object.module)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteModuleRequest() {
    return { moduleId: "", userId: "" };
}
exports.DeleteModuleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.moduleId !== "") {
            writer.uint32(10).string(message.moduleId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteModuleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.moduleId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
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
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteModuleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteModuleRequest();
        message.moduleId = object.moduleId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { module: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.module !== undefined) {
            exports.Module.encode(message.module, writer.uint32(10).fork()).join();
        }
        if (message.error !== undefined) {
            base_1.ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.module = exports.Module.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = base_1.ErrorResponse.decode(reader, reader.uint32());
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
            module: isSet(object.module) ? exports.Module.fromJSON(object.module) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.module !== undefined) {
            obj.module = exports.Module.toJSON(message.module);
        }
        if (message.error !== undefined) {
            obj.error = base_1.ErrorResponse.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.CreateSuccess.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSuccess();
        message.module = (object.module !== undefined && object.module !== null)
            ? exports.Module.fromPartial(object.module)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
exports.ModuleServiceServiceName = "module.v1.ModuleService";
class ModuleServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ModuleServiceServiceName;
        this.rpc = rpc;
        this.GetModule = this.GetModule.bind(this);
        this.GetModules = this.GetModules.bind(this);
        this.CreateModule = this.CreateModule.bind(this);
        this.UpdateModule = this.UpdateModule.bind(this);
        this.DeleteModule = this.DeleteModule.bind(this);
    }
    GetModule(request) {
        const data = exports.GetModuleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetModule", data);
        return promise.then((data) => exports.Module.decode(new wire_1.BinaryReader(data)));
    }
    GetModules(request) {
        const data = exports.GetModulesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetModules", data);
        return promise.then((data) => exports.GetModulesResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateModule(request) {
        const data = exports.CreateModuleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateModule", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateModule(request) {
        const data = exports.UpdateModuleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateModule", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteModule(request) {
        const data = exports.DeleteModuleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteModule", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.ModuleServiceClientImpl = ModuleServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=module.js.map