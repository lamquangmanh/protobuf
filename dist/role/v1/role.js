"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleServiceClientImpl = exports.RoleServiceServiceName = exports.CreateSuccess = exports.DeleteRoleRequest = exports.UpdateRoleRequest = exports.CreateRoleRequest = exports.GetRolesResponse = exports.GetRolesRequest = exports.GetRoleRequest = exports.UpdateRoleData = exports.CreateRoleData = exports.Permission = exports.Role = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "role.v1";
function createBaseRole() {
    return {
        roleId: "",
        name: "",
        description: "",
        moduleId: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        createdAt: "",
    };
}
exports.Role = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.moduleId !== "") {
            writer.uint32(34).string(message.moduleId);
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
        const message = createBaseRole();
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
                    message.moduleId = reader.string();
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
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
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
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
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
        return exports.Role.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseRole();
        message.roleId = object.roleId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
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
function createBasePermission() {
    return { resourceId: "", actionId: "", permissionId: undefined };
}
exports.Permission = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.actionId !== "") {
            writer.uint32(18).string(message.actionId);
        }
        if (message.permissionId !== undefined) {
            writer.uint32(26).string(message.permissionId);
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
                    message.resourceId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.actionId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
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
        return {
            resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
            actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
            permissionId: isSet(object.permissionId) ? globalThis.String(object.permissionId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceId !== "") {
            obj.resourceId = message.resourceId;
        }
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.permissionId !== undefined) {
            obj.permissionId = message.permissionId;
        }
        return obj;
    },
    create(base) {
        return exports.Permission.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePermission();
        message.resourceId = object.resourceId ?? "";
        message.actionId = object.actionId ?? "";
        message.permissionId = object.permissionId ?? undefined;
        return message;
    },
};
function createBaseCreateRoleData() {
    return { name: "", description: "", moduleId: "", permissions: [] };
}
exports.CreateRoleData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.moduleId !== "") {
            writer.uint32(26).string(message.moduleId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRoleData();
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
                    message.moduleId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
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
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            permissions: globalThis.Array.isArray(object?.permissions)
                ? object.permissions.map((e) => exports.Permission.fromJSON(e))
                : [],
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
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.permissions?.length) {
            obj.permissions = message.permissions.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.CreateRoleData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateRoleData();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.moduleId = object.moduleId ?? "";
        message.permissions = object.permissions?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBaseUpdateRoleData() {
    return { roleId: "", name: "", description: "", moduleId: "", permissions: [] };
}
exports.UpdateRoleData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.moduleId !== "") {
            writer.uint32(34).string(message.moduleId);
        }
        for (const v of message.permissions) {
            exports.Permission.encode(v, writer.uint32(42).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateRoleData();
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
                    message.moduleId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.permissions.push(exports.Permission.decode(reader, reader.uint32()));
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
            permissions: globalThis.Array.isArray(object?.permissions)
                ? object.permissions.map((e) => exports.Permission.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.moduleId !== "") {
            obj.moduleId = message.moduleId;
        }
        if (message.permissions?.length) {
            obj.permissions = message.permissions.map((e) => exports.Permission.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.UpdateRoleData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateRoleData();
        message.roleId = object.roleId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.moduleId = object.moduleId ?? "";
        message.permissions = object.permissions?.map((e) => exports.Permission.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetRoleRequest() {
    return { roleId: "" };
}
exports.GetRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRoleRequest();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        return obj;
    },
    create(base) {
        return exports.GetRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRoleRequest();
        message.roleId = object.roleId ?? "";
        return message;
    },
};
function createBaseGetRolesRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetRolesRequest = {
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
        const message = createBaseGetRolesRequest();
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
        return exports.GetRolesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRolesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetRolesResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetRolesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Role.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRolesResponse();
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
                    message.data.push(exports.Role.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Role.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Role.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetRolesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetRolesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Role.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateRoleRequest() {
    return { role: undefined, userId: "" };
}
exports.CreateRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.role !== undefined) {
            exports.CreateRoleData.encode(message.role, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.role = exports.CreateRoleData.decode(reader, reader.uint32());
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
            role: isSet(object.role) ? exports.CreateRoleData.fromJSON(object.role) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = exports.CreateRoleData.toJSON(message.role);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateRoleRequest();
        message.role = (object.role !== undefined && object.role !== null)
            ? exports.CreateRoleData.fromPartial(object.role)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateRoleRequest() {
    return { role: undefined, userId: "" };
}
exports.UpdateRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.role !== undefined) {
            exports.UpdateRoleData.encode(message.role, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.role = exports.UpdateRoleData.decode(reader, reader.uint32());
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
            role: isSet(object.role) ? exports.UpdateRoleData.fromJSON(object.role) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = exports.UpdateRoleData.toJSON(message.role);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateRoleRequest();
        message.role = (object.role !== undefined && object.role !== null)
            ? exports.UpdateRoleData.fromPartial(object.role)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteRoleRequest() {
    return { roleId: "", userId: "" };
}
exports.DeleteRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.roleId !== "") {
            writer.uint32(10).string(message.roleId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteRoleRequest();
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
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteRoleRequest();
        message.roleId = object.roleId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { role: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.role !== undefined) {
            exports.Role.encode(message.role, writer.uint32(10).fork()).join();
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
                    message.role = exports.Role.decode(reader, reader.uint32());
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
            role: isSet(object.role) ? exports.Role.fromJSON(object.role) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.role !== undefined) {
            obj.role = exports.Role.toJSON(message.role);
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
        message.role = (object.role !== undefined && object.role !== null) ? exports.Role.fromPartial(object.role) : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
exports.RoleServiceServiceName = "role.v1.RoleService";
class RoleServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.RoleServiceServiceName;
        this.rpc = rpc;
        this.GetRole = this.GetRole.bind(this);
        this.GetRoles = this.GetRoles.bind(this);
        this.CreateRole = this.CreateRole.bind(this);
        this.UpdateRole = this.UpdateRole.bind(this);
        this.DeleteRole = this.DeleteRole.bind(this);
    }
    GetRole(request) {
        const data = exports.GetRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetRole", data);
        return promise.then((data) => exports.Role.decode(new wire_1.BinaryReader(data)));
    }
    GetRoles(request) {
        const data = exports.GetRolesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetRoles", data);
        return promise.then((data) => exports.GetRolesResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateRole(request) {
        const data = exports.CreateRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateRole", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateRole(request) {
        const data = exports.UpdateRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateRole", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteRole(request) {
        const data = exports.DeleteRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteRole", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.RoleServiceClientImpl = RoleServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=role.js.map