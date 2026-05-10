"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionServiceClientImpl = exports.ActionServiceServiceName = exports.GetActionResponse = exports.DeleteActionResponse = exports.UpdateActionResponse = exports.CreateActionResponse = exports.DeleteActionRequest = exports.UpdateActionRequest = exports.CreateActionRequest = exports.GetActionsResponse = exports.GetActionsRequest = exports.GetActionRequest = exports.UpdateActionData = exports.CreateActionData = exports.Action = exports.ActionRequestType = exports.protobufPackage = void 0;
exports.actionRequestTypeFromJSON = actionRequestTypeFromJSON;
exports.actionRequestTypeToJSON = actionRequestTypeToJSON;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "proto.action.v1";
var ActionRequestType;
(function (ActionRequestType) {
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_UNSPECIFIED"] = 0] = "ACTION_REQUEST_TYPE_UNSPECIFIED";
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_VIEW"] = 1] = "ACTION_REQUEST_TYPE_VIEW";
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_HTTP"] = 2] = "ACTION_REQUEST_TYPE_HTTP";
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_GRAPHQL"] = 3] = "ACTION_REQUEST_TYPE_GRAPHQL";
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_GRPC"] = 4] = "ACTION_REQUEST_TYPE_GRPC";
    ActionRequestType[ActionRequestType["ACTION_REQUEST_TYPE_WEBSOCKET"] = 5] = "ACTION_REQUEST_TYPE_WEBSOCKET";
    ActionRequestType[ActionRequestType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionRequestType || (exports.ActionRequestType = ActionRequestType = {}));
function actionRequestTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ACTION_REQUEST_TYPE_UNSPECIFIED":
            return ActionRequestType.ACTION_REQUEST_TYPE_UNSPECIFIED;
        case 1:
        case "ACTION_REQUEST_TYPE_VIEW":
            return ActionRequestType.ACTION_REQUEST_TYPE_VIEW;
        case 2:
        case "ACTION_REQUEST_TYPE_HTTP":
            return ActionRequestType.ACTION_REQUEST_TYPE_HTTP;
        case 3:
        case "ACTION_REQUEST_TYPE_GRAPHQL":
            return ActionRequestType.ACTION_REQUEST_TYPE_GRAPHQL;
        case 4:
        case "ACTION_REQUEST_TYPE_GRPC":
            return ActionRequestType.ACTION_REQUEST_TYPE_GRPC;
        case 5:
        case "ACTION_REQUEST_TYPE_WEBSOCKET":
            return ActionRequestType.ACTION_REQUEST_TYPE_WEBSOCKET;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionRequestType.UNRECOGNIZED;
    }
}
function actionRequestTypeToJSON(object) {
    switch (object) {
        case ActionRequestType.ACTION_REQUEST_TYPE_UNSPECIFIED:
            return "ACTION_REQUEST_TYPE_UNSPECIFIED";
        case ActionRequestType.ACTION_REQUEST_TYPE_VIEW:
            return "ACTION_REQUEST_TYPE_VIEW";
        case ActionRequestType.ACTION_REQUEST_TYPE_HTTP:
            return "ACTION_REQUEST_TYPE_HTTP";
        case ActionRequestType.ACTION_REQUEST_TYPE_GRAPHQL:
            return "ACTION_REQUEST_TYPE_GRAPHQL";
        case ActionRequestType.ACTION_REQUEST_TYPE_GRPC:
            return "ACTION_REQUEST_TYPE_GRPC";
        case ActionRequestType.ACTION_REQUEST_TYPE_WEBSOCKET:
            return "ACTION_REQUEST_TYPE_WEBSOCKET";
        case ActionRequestType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseAction() {
    return {
        actionId: "",
        resourceId: "",
        name: "",
        description: "",
        requestType: 0,
        url: "",
        method: "",
        createdAt: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
    };
}
exports.Action = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.requestType !== 0) {
            writer.uint32(40).int32(message.requestType);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        if (message.method !== "") {
            writer.uint32(58).string(message.method);
        }
        if (message.createdAt !== "") {
            writer.uint32(66).string(message.createdAt);
        }
        if (message.createdUserId !== "") {
            writer.uint32(74).string(message.createdUserId);
        }
        if (message.updatedAt !== "") {
            writer.uint32(82).string(message.updatedAt);
        }
        if (message.updatedUserId !== "") {
            writer.uint32(90).string(message.updatedUserId);
        }
        if (message.deletedAt !== "") {
            writer.uint32(98).string(message.deletedAt);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(106).string(message.deletedUserId);
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
                    message.actionId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.requestType = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.createdAt = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.createdUserId = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.updatedUserId = reader.string();
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
                        break;
                    }
                    message.deletedAt = reader.string();
                    continue;
                }
                case 13: {
                    if (tag !== 106) {
                        break;
                    }
                    message.deletedUserId = reader.string();
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
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
            createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
            createdUserId: isSet(object.createdUserId) ? globalThis.String(object.createdUserId) : "",
            updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
            updatedUserId: isSet(object.updatedUserId) ? globalThis.String(object.updatedUserId) : "",
            deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
            deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.requestType !== 0) {
            obj.requestType = actionRequestTypeToJSON(message.requestType);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.method !== "") {
            obj.method = message.method;
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
        return obj;
    },
    create(base) {
        return exports.Action.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAction();
        message.actionId = object.actionId ?? "";
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.requestType = object.requestType ?? 0;
        message.url = object.url ?? "";
        message.method = object.method ?? "";
        message.createdAt = object.createdAt ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        return message;
    },
};
function createBaseCreateActionData() {
    return { resourceId: "", name: "", description: "", requestType: 0, url: "", method: "" };
}
exports.CreateActionData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.requestType !== 0) {
            writer.uint32(32).int32(message.requestType);
        }
        if (message.url !== "") {
            writer.uint32(42).string(message.url);
        }
        if (message.method !== "") {
            writer.uint32(50).string(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateActionData();
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
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.requestType = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.method = reader.string();
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
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
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
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.requestType !== 0) {
            obj.requestType = actionRequestTypeToJSON(message.requestType);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.method !== "") {
            obj.method = message.method;
        }
        return obj;
    },
    create(base) {
        return exports.CreateActionData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateActionData();
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.requestType = object.requestType ?? 0;
        message.url = object.url ?? "";
        message.method = object.method ?? "";
        return message;
    },
};
function createBaseUpdateActionData() {
    return { actionId: "", resourceId: "", name: "", description: "", requestType: 0, url: "", method: "" };
}
exports.UpdateActionData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.requestType !== 0) {
            writer.uint32(40).int32(message.requestType);
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        if (message.method !== "") {
            writer.uint32(58).string(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateActionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.actionId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.requestType = reader.int32();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.method = reader.string();
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
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.requestType !== 0) {
            obj.requestType = actionRequestTypeToJSON(message.requestType);
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.method !== "") {
            obj.method = message.method;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateActionData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateActionData();
        message.actionId = object.actionId ?? "";
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.requestType = object.requestType ?? 0;
        message.url = object.url ?? "";
        message.method = object.method ?? "";
        return message;
    },
};
function createBaseGetActionRequest() {
    return { actionId: "" };
}
exports.GetActionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
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
        return { actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        return obj;
    },
    create(base) {
        return exports.GetActionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActionRequest();
        message.actionId = object.actionId ?? "";
        return message;
    },
};
function createBaseGetActionsRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetActionsRequest = {
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
        const message = createBaseGetActionsRequest();
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
        return exports.GetActionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActionsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetActionsResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetActionsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Action.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActionsResponse();
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
                    message.data.push(exports.Action.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Action.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Action.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetActionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActionsResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Action.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateActionRequest() {
    return { action: undefined, userId: "" };
}
exports.CreateActionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.action !== undefined) {
            exports.CreateActionData.encode(message.action, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.action = exports.CreateActionData.decode(reader, reader.uint32());
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
            action: isSet(object.action) ? exports.CreateActionData.fromJSON(object.action) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.action !== undefined) {
            obj.action = exports.CreateActionData.toJSON(message.action);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateActionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateActionRequest();
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.CreateActionData.fromPartial(object.action)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateActionRequest() {
    return { action: undefined, userId: "" };
}
exports.UpdateActionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.action !== undefined) {
            exports.UpdateActionData.encode(message.action, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.action = exports.UpdateActionData.decode(reader, reader.uint32());
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
            action: isSet(object.action) ? exports.UpdateActionData.fromJSON(object.action) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.action !== undefined) {
            obj.action = exports.UpdateActionData.toJSON(message.action);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateActionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateActionRequest();
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.UpdateActionData.fromPartial(object.action)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteActionRequest() {
    return { actionId: "", userId: "" };
}
exports.DeleteActionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteActionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.actionId = reader.string();
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
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteActionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteActionRequest();
        message.actionId = object.actionId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateActionResponse() {
    return { action: undefined, errors: [] };
}
exports.CreateActionResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.action !== undefined) {
            exports.Action.encode(message.action, writer.uint32(10).fork()).join();
        }
        for (const v of message.errors) {
            base_1.ErrorMessage.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.action = exports.Action.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.errors.push(base_1.ErrorMessage.decode(reader, reader.uint32()));
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
            action: isSet(object.action) ? exports.Action.fromJSON(object.action) : undefined,
            errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e) => base_1.ErrorMessage.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.action !== undefined) {
            obj.action = exports.Action.toJSON(message.action);
        }
        if (message.errors?.length) {
            obj.errors = message.errors.map((e) => base_1.ErrorMessage.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CreateActionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateActionResponse();
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.Action.fromPartial(object.action)
            : undefined;
        message.errors = object.errors?.map((e) => base_1.ErrorMessage.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateActionResponse() {
    return { success: false, errors: [] };
}
exports.UpdateActionResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== false) {
            writer.uint32(8).bool(message.success);
        }
        for (const v of message.errors) {
            base_1.ErrorMessage.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.errors.push(base_1.ErrorMessage.decode(reader, reader.uint32()));
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
            success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
            errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e) => base_1.ErrorMessage.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== false) {
            obj.success = message.success;
        }
        if (message.errors?.length) {
            obj.errors = message.errors.map((e) => base_1.ErrorMessage.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UpdateActionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateActionResponse();
        message.success = object.success ?? false;
        message.errors = object.errors?.map((e) => base_1.ErrorMessage.fromPartial(e)) || [];
        return message;
    },
};
function createBaseDeleteActionResponse() {
    return { success: false, errors: [] };
}
exports.DeleteActionResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== false) {
            writer.uint32(8).bool(message.success);
        }
        for (const v of message.errors) {
            base_1.ErrorMessage.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.errors.push(base_1.ErrorMessage.decode(reader, reader.uint32()));
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
            success: isSet(object.success) ? globalThis.Boolean(object.success) : false,
            errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e) => base_1.ErrorMessage.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== false) {
            obj.success = message.success;
        }
        if (message.errors?.length) {
            obj.errors = message.errors.map((e) => base_1.ErrorMessage.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.DeleteActionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteActionResponse();
        message.success = object.success ?? false;
        message.errors = object.errors?.map((e) => base_1.ErrorMessage.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetActionResponse() {
    return { action: undefined, errors: [] };
}
exports.GetActionResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.action !== undefined) {
            exports.Action.encode(message.action, writer.uint32(10).fork()).join();
        }
        for (const v of message.errors) {
            base_1.ErrorMessage.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.action = exports.Action.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.errors.push(base_1.ErrorMessage.decode(reader, reader.uint32()));
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
            action: isSet(object.action) ? exports.Action.fromJSON(object.action) : undefined,
            errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e) => base_1.ErrorMessage.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.action !== undefined) {
            obj.action = exports.Action.toJSON(message.action);
        }
        if (message.errors?.length) {
            obj.errors = message.errors.map((e) => base_1.ErrorMessage.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetActionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetActionResponse();
        message.action = (object.action !== undefined && object.action !== null)
            ? exports.Action.fromPartial(object.action)
            : undefined;
        message.errors = object.errors?.map((e) => base_1.ErrorMessage.fromPartial(e)) || [];
        return message;
    },
};
exports.ActionServiceServiceName = "proto.action.v1.ActionService";
class ActionServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ActionServiceServiceName;
        this.rpc = rpc;
        this.GetAction = this.GetAction.bind(this);
        this.GetActions = this.GetActions.bind(this);
        this.CreateAction = this.CreateAction.bind(this);
        this.UpdateAction = this.UpdateAction.bind(this);
        this.DeleteAction = this.DeleteAction.bind(this);
    }
    GetAction(request) {
        const data = exports.GetActionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetAction", data);
        return promise.then((data) => exports.GetActionResponse.decode(new wire_1.BinaryReader(data)));
    }
    GetActions(request) {
        const data = exports.GetActionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetActions", data);
        return promise.then((data) => exports.GetActionsResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateAction(request) {
        const data = exports.CreateActionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateAction", data);
        return promise.then((data) => exports.CreateActionResponse.decode(new wire_1.BinaryReader(data)));
    }
    UpdateAction(request) {
        const data = exports.UpdateActionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateAction", data);
        return promise.then((data) => exports.UpdateActionResponse.decode(new wire_1.BinaryReader(data)));
    }
    DeleteAction(request) {
        const data = exports.DeleteActionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteAction", data);
        return promise.then((data) => exports.DeleteActionResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.ActionServiceClientImpl = ActionServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=action.js.map