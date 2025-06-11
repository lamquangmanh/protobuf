"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionServiceClientImpl = exports.PermissionServiceServiceName = exports.GetPermissionsByUserIdResponse = exports.GetPermissionsByUserIdRequest = exports.PermissionInfo = exports.CreateSuccess = exports.DeletePermissionRequest = exports.UpdatePermissionRequest = exports.CreatePermissionRequest = exports.GetPermissionsResponse = exports.GetPermissionsRequest = exports.GetPermissionRequest = exports.UpdatePermissionData = exports.CreatePermissionData = exports.Permission = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "permission.v1";
function createBasePermission() {
    return {
        permissionId: "",
        roleId: "",
        resourceId: "",
        actionId: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        createdAt: "",
    };
}
exports.Permission = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permissionId !== "") {
            writer.uint32(10).string(message.permissionId);
        }
        if (message.roleId !== "") {
            writer.uint32(18).string(message.roleId);
        }
        if (message.resourceId !== "") {
            writer.uint32(26).string(message.resourceId);
        }
        if (message.actionId !== "") {
            writer.uint32(34).string(message.actionId);
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
        if (message.createdAt !== "") {
            writer.uint32(82).string(message.createdAt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permissionId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.roleId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.actionId = reader.string();
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
            permissionId: isSet(object.permissionId) ? globalThis.String(object.permissionId) : "",
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
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
        if (message.permissionId !== "") {
            obj.permissionId = message.permissionId;
        }
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
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
        return exports.Permission.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermission();
        message.permissionId = object.permissionId ?? "";
        message.roleId = object.roleId ?? "";
        message.resourceId = object.resourceId ?? "";
        message.actionId = object.actionId ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        message.createdAt = object.createdAt ?? "";
        return message;
    },
};
function createBaseCreatePermissionData() {
    return { roleId: "", resourceId: "", actionId: "" };
}
exports.CreatePermissionData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        if (message.resourceId !== "") {
            writer.uint32(18).string(message.resourceId);
        }
        if (message.actionId !== "") {
            writer.uint32(26).string(message.actionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePermissionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.roleId = reader.string();
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
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        return obj;
    },
    create(base) {
        return exports.CreatePermissionData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePermissionData();
        message.roleId = object.roleId ?? "";
        message.resourceId = object.resourceId ?? "";
        message.actionId = object.actionId ?? "";
        return message;
    },
};
function createBaseUpdatePermissionData() {
    return { permissionId: "", roleId: "", resourceId: "", actionId: "" };
}
exports.UpdatePermissionData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permissionId !== "") {
            writer.uint32(10).string(message.permissionId);
        }
        if (message.roleId !== "") {
            writer.uint32(18).string(message.roleId);
        }
        if (message.resourceId !== "") {
            writer.uint32(26).string(message.resourceId);
        }
        if (message.actionId !== "") {
            writer.uint32(34).string(message.actionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePermissionData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permissionId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.roleId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
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
            permissionId: isSet(object.permissionId) ? globalThis.String(object.permissionId) : "",
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permissionId !== "") {
            obj.permissionId = message.permissionId;
        }
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePermissionData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePermissionData();
        message.permissionId = object.permissionId ?? "";
        message.roleId = object.roleId ?? "";
        message.resourceId = object.resourceId ?? "";
        message.actionId = object.actionId ?? "";
        return message;
    },
};
function createBaseGetPermissionRequest() {
    return { permissionId: "" };
}
exports.GetPermissionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permissionId !== "") {
            writer.uint32(10).string(message.permissionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permissionId = reader.string();
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
        return { permissionId: isSet(object.permissionId) ? globalThis.String(object.permissionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.permissionId !== "") {
            obj.permissionId = message.permissionId;
        }
        return obj;
    },
    create(base) {
        return exports.GetPermissionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionRequest();
        message.permissionId = object.permissionId ?? "";
        return message;
    },
};
function createBaseGetPermissionsRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetPermissionsRequest = {
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
        const message = createBaseGetPermissionsRequest();
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
        return exports.GetPermissionsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetPermissionsResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetPermissionsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Permission.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionsResponse();
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
                    message.data.push(exports.Permission.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Permission.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPermissionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionsResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreatePermissionRequest() {
    return { permission: undefined, userId: "" };
}
exports.CreatePermissionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permission !== undefined) {
            exports.CreatePermissionData.encode(message.permission, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePermissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = exports.CreatePermissionData.decode(reader, reader.uint32());
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
            permission: isSet(object.permission) ? exports.CreatePermissionData.fromJSON(object.permission) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = exports.CreatePermissionData.toJSON(message.permission);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreatePermissionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreatePermissionRequest();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.CreatePermissionData.fromPartial(object.permission)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdatePermissionRequest() {
    return { permission: undefined, userId: "" };
}
exports.UpdatePermissionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permission !== undefined) {
            exports.UpdatePermissionData.encode(message.permission, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePermissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permission = exports.UpdatePermissionData.decode(reader, reader.uint32());
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
            permission: isSet(object.permission) ? exports.UpdatePermissionData.fromJSON(object.permission) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = exports.UpdatePermissionData.toJSON(message.permission);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePermissionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePermissionRequest();
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.UpdatePermissionData.fromPartial(object.permission)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeletePermissionRequest() {
    return { permissionId: "", userId: "" };
}
exports.DeletePermissionRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permissionId !== "") {
            writer.uint32(10).string(message.permissionId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePermissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permissionId = reader.string();
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
            permissionId: isSet(object.permissionId) ? globalThis.String(object.permissionId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permissionId !== "") {
            obj.permissionId = message.permissionId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeletePermissionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeletePermissionRequest();
        message.permissionId = object.permissionId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { permission: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.permission !== undefined) {
            exports.Permission.encode(message.permission, writer.uint32(10).fork()).join();
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
                    message.permission = exports.Permission.decode(reader, reader.uint32());
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
            permission: isSet(object.permission) ? exports.Permission.fromJSON(object.permission) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permission !== undefined) {
            obj.permission = exports.Permission.toJSON(message.permission);
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
        message.permission = (object.permission !== undefined && object.permission !== null)
            ? exports.Permission.fromPartial(object.permission)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBasePermissionInfo() {
    return { name: "", requestType: "", method: "", url: "" };
}
exports.PermissionInfo = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.requestType !== "") {
            writer.uint32(18).string(message.requestType);
        }
        if (message.method !== "") {
            writer.uint32(26).string(message.method);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermissionInfo();
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
                    message.requestType = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.url = reader.string();
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
            requestType: isSet(object.requestType) ? globalThis.String(object.requestType) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.requestType !== "") {
            obj.requestType = message.requestType;
        }
        if (message.method !== "") {
            obj.method = message.method;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        return obj;
    },
    create(base) {
        return exports.PermissionInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermissionInfo();
        message.name = object.name ?? "";
        message.requestType = object.requestType ?? "";
        message.method = object.method ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseGetPermissionsByUserIdRequest() {
    return { userId: "" };
}
exports.GetPermissionsByUserIdRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionsByUserIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
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
        return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.GetPermissionsByUserIdRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionsByUserIdRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetPermissionsByUserIdResponse() {
    return { permissions: [] };
}
exports.GetPermissionsByUserIdResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.permissions) {
            exports.PermissionInfo.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPermissionsByUserIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.permissions.push(exports.PermissionInfo.decode(reader, reader.uint32()));
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
            permissions: globalThis.Array.isArray(object?.permissions)
                ? object.permissions.map((e) => exports.PermissionInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.permissions?.length) {
            obj.permissions = message.permissions.map((e) => exports.PermissionInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPermissionsByUserIdResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPermissionsByUserIdResponse();
        message.permissions = object.permissions?.map((e) => exports.PermissionInfo.fromPartial(e)) || [];
        return message;
    },
};
exports.PermissionServiceServiceName = "permission.v1.PermissionService";
class PermissionServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.PermissionServiceServiceName;
        this.rpc = rpc;
        this.GetPermission = this.GetPermission.bind(this);
        this.GetPermissions = this.GetPermissions.bind(this);
        this.CreatePermission = this.CreatePermission.bind(this);
        this.UpdatePermission = this.UpdatePermission.bind(this);
        this.DeletePermission = this.DeletePermission.bind(this);
        this.GetPermissionsByUserId = this.GetPermissionsByUserId.bind(this);
    }
    GetPermission(request) {
        const data = exports.GetPermissionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetPermission", data);
        return promise.then((data) => exports.Permission.decode(new wire_1.BinaryReader(data)));
    }
    GetPermissions(request) {
        const data = exports.GetPermissionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetPermissions", data);
        return promise.then((data) => exports.GetPermissionsResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreatePermission(request) {
        const data = exports.CreatePermissionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreatePermission", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdatePermission(request) {
        const data = exports.UpdatePermissionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdatePermission", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeletePermission(request) {
        const data = exports.DeletePermissionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeletePermission", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
    GetPermissionsByUserId(request) {
        const data = exports.GetPermissionsByUserIdRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetPermissionsByUserId", data);
        return promise.then((data) => exports.GetPermissionsByUserIdResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.PermissionServiceClientImpl = PermissionServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=permission.js.map