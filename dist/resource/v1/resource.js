"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceServiceClientImpl = exports.ResourceServiceServiceName = exports.CreateSuccess = exports.DeleteResourceRequest = exports.UpdateResourceRequest = exports.CreateResourceRequest = exports.GetResourcesResponse = exports.GetResourcesRequest = exports.GetResourceRequest = exports.UpdateResourceData = exports.CreateResourceData = exports.Action = exports.Resource = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const action_1 = require("../../action/v1/action");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "resource.v1";
function createBaseResource() {
    return {
        resourceId: "",
        name: "",
        moduleId: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        createdAt: "",
    };
}
exports.Resource = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.moduleId !== "") {
            writer.uint32(26).string(message.moduleId);
        }
        if (message.createdUserId !== "") {
            writer.uint32(34).string(message.createdUserId);
        }
        if (message.updatedAt !== "") {
            writer.uint32(42).string(message.updatedAt);
        }
        if (message.updatedUserId !== "") {
            writer.uint32(50).string(message.updatedUserId);
        }
        if (message.deletedAt !== "") {
            writer.uint32(58).string(message.deletedAt);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(66).string(message.deletedUserId);
        }
        if (message.createdAt !== "") {
            writer.uint32(74).string(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceId = reader.string();
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
                    message.moduleId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.createdUserId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.updatedUserId = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.deletedAt = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.deletedUserId = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.createdAt = reader.string();
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
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            createdUserId: isSet(object.createdUserId) ? globalThis.String(object.createdUserId) : "",
            updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
            updatedUserId: isSet(object.updatedUserId) ? globalThis.String(object.updatedUserId) : "",
            deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
            deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
            createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
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
        if (message.createdAt !== "") {
            obj.createdAt = message.createdAt;
        }
        return obj;
    },
    create(base) {
        return exports.Resource.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResource();
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.moduleId = object.moduleId ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        message.createdAt = object.createdAt ?? "";
        return message;
    },
};
function createBaseAction() {
    return { name: "", description: "", requestType: 0, url: "", method: "", actionId: undefined };
}
exports.Action = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.requestType !== 0) {
            writer.uint32(24).int32(message.requestType);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.method !== "") {
            writer.uint32(42).string(message.method);
        }
        if (message.actionId !== undefined) {
            writer.uint32(50).string(message.actionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAction();
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
                    if (tag !== 24) {
                        break;
                    }
                    message.requestType = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.actionId = reader.string();
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
            requestType: isSet(object.requestType) ? (0, action_1.actionRequestTypeFromJSON)(object.requestType) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : undefined,
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
        if (message.requestType !== 0) {
            obj.requestType = (0, action_1.actionRequestTypeToJSON)(message.requestType);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.method !== "") {
            obj.method = message.method;
        }
        if (message.actionId !== undefined) {
            obj.actionId = message.actionId;
        }
        return obj;
    },
    create(base) {
        return exports.Action.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.requestType = object.requestType ?? 0;
        message.url = object.url ?? "";
        message.method = object.method ?? "";
        message.actionId = object.actionId ?? undefined;
        return message;
    },
};
function createBaseCreateResourceData() {
    return { name: "", moduleId: "", actions: [] };
}
exports.CreateResourceData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.moduleId !== "") {
            writer.uint32(18).string(message.moduleId);
        }
        for (const v of message.actions) {
            exports.Action.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateResourceData();
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
                    message.moduleId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.actions.push(exports.Action.decode(reader, reader.uint32()));
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
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => exports.Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.actions?.length) {
            obj.actions = message.actions.map((e) => exports.Action.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CreateResourceData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateResourceData();
        message.name = object.name ?? "";
        message.moduleId = object.moduleId ?? "";
        message.actions = object.actions?.map((e) => exports.Action.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateResourceData() {
    return { resourceId: "", name: "", moduleId: "", actions: [] };
}
exports.UpdateResourceData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.moduleId !== "") {
            writer.uint32(26).string(message.moduleId);
        }
        for (const v of message.actions) {
            exports.Action.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateResourceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceId = reader.string();
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
                    message.moduleId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.actions.push(exports.Action.decode(reader, reader.uint32()));
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
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            actions: globalThis.Array.isArray(object?.actions) ? object.actions.map((e) => exports.Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.actions?.length) {
            obj.actions = message.actions.map((e) => exports.Action.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UpdateResourceData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateResourceData();
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.moduleId = object.moduleId ?? "";
        message.actions = object.actions?.map((e) => exports.Action.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetResourceRequest() {
    return { resourceId: "" };
}
exports.GetResourceRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceId = reader.string();
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
        return { resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        return obj;
    },
    create(base) {
        return exports.GetResourceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetResourceRequest();
        message.resourceId = object.resourceId ?? "";
        return message;
    },
};
function createBaseGetResourcesRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetResourcesRequest = {
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
        const message = createBaseGetResourcesRequest();
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
        return exports.GetResourcesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetResourcesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetResourcesResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetResourcesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Resource.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResourcesResponse();
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
                    message.data.push(exports.Resource.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Resource.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Resource.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetResourcesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetResourcesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Resource.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateResourceRequest() {
    return { resource: undefined, userId: "" };
}
exports.CreateResourceRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resource !== undefined) {
            exports.CreateResourceData.encode(message.resource, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resource = exports.CreateResourceData.decode(reader, reader.uint32());
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
            resource: isSet(object.resource) ? exports.CreateResourceData.fromJSON(object.resource) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = exports.CreateResourceData.toJSON(message.resource);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateResourceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateResourceRequest();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? exports.CreateResourceData.fromPartial(object.resource)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateResourceRequest() {
    return { resource: undefined, userId: "" };
}
exports.UpdateResourceRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resource !== undefined) {
            exports.UpdateResourceData.encode(message.resource, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resource = exports.UpdateResourceData.decode(reader, reader.uint32());
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
            resource: isSet(object.resource) ? exports.UpdateResourceData.fromJSON(object.resource) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = exports.UpdateResourceData.toJSON(message.resource);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateResourceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateResourceRequest();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? exports.UpdateResourceData.fromPartial(object.resource)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteResourceRequest() {
    return { resourceId: "", userId: "" };
}
exports.DeleteResourceRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceId = reader.string();
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
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteResourceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteResourceRequest();
        message.resourceId = object.resourceId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { resource: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resource !== undefined) {
            exports.Resource.encode(message.resource, writer.uint32(10).fork()).join();
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
                    message.resource = exports.Resource.decode(reader, reader.uint32());
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
            resource: isSet(object.resource) ? exports.Resource.fromJSON(object.resource) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = exports.Resource.toJSON(message.resource);
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
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? exports.Resource.fromPartial(object.resource)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
exports.ResourceServiceServiceName = "resource.v1.ResourceService";
class ResourceServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ResourceServiceServiceName;
        this.rpc = rpc;
        this.GetResource = this.GetResource.bind(this);
        this.GetResources = this.GetResources.bind(this);
        this.CreateResource = this.CreateResource.bind(this);
        this.UpdateResource = this.UpdateResource.bind(this);
        this.DeleteResource = this.DeleteResource.bind(this);
    }
    GetResource(request) {
        const data = exports.GetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetResource", data);
        return promise.then((data) => exports.Resource.decode(new wire_1.BinaryReader(data)));
    }
    GetResources(request) {
        const data = exports.GetResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetResources", data);
        return promise.then((data) => exports.GetResourcesResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateResource(request) {
        const data = exports.CreateResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateResource", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateResource(request) {
        const data = exports.UpdateResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateResource", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteResource(request) {
        const data = exports.DeleteResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteResource", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.ResourceServiceClientImpl = ResourceServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=resource.js.map