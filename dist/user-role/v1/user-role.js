"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleServiceClientImpl = exports.UserRoleServiceServiceName = exports.CreateSuccess = exports.DeleteUserRoleRequest = exports.UpdateUserRoleRequest = exports.CreateUserRoleRequest = exports.GetUserRolesResponse = exports.GetUserRolesRequest = exports.GetUserRoleRequest = exports.CreateUserRoleData = exports.UserRole = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "user_role.v1";
function createBaseUserRole() {
    return {
        userRoleId: "",
        userId: "",
        roleId: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        createdAt: "",
    };
}
exports.UserRole = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRoleId !== "") {
            writer.uint32(10).string(message.userRoleId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        if (message.roleId !== "") {
            writer.uint32(26).string(message.roleId);
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
        const message = createBaseUserRole();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userRoleId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.roleId = reader.string();
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
            userRoleId: isSet(object.userRoleId) ? globalThis.String(object.userRoleId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
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
        if (message.userRoleId !== "") {
            obj.userRoleId = message.userRoleId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
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
        return exports.UserRole.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserRole();
        message.userRoleId = object.userRoleId ?? "";
        message.userId = object.userId ?? "";
        message.roleId = object.roleId ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        message.createdAt = object.createdAt ?? "";
        return message;
    },
};
function createBaseCreateUserRoleData() {
    return { userId: "", roleId: "" };
}
exports.CreateUserRoleData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.roleId !== "") {
            writer.uint32(18).string(message.roleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRoleData();
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
                case 2: {
                    if (tag !== 18) {
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
        return {
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            roleId: isSet(object.roleId) ? globalThis.String(object.roleId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.roleId !== "") {
            obj.roleId = message.roleId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRoleData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRoleData();
        message.userId = object.userId ?? "";
        message.roleId = object.roleId ?? "";
        return message;
    },
};
function createBaseGetUserRoleRequest() {
    return { userRoleId: "" };
}
exports.GetUserRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRoleId !== "") {
            writer.uint32(10).string(message.userRoleId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userRoleId = reader.string();
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
        return { userRoleId: isSet(object.userRoleId) ? globalThis.String(object.userRoleId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.userRoleId !== "") {
            obj.userRoleId = message.userRoleId;
        }
        return obj;
    },
    create(base) {
        return exports.GetUserRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserRoleRequest();
        message.userRoleId = object.userRoleId ?? "";
        return message;
    },
};
function createBaseGetUserRolesRequest() {
    return { pagination: undefined, sort: [], filter: [] };
}
exports.GetUserRolesRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationRequest.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.sort) {
            base_1.Sort.encode(v, writer.uint32(18).fork()).join();
        }
        for (const v of message.filter) {
            base_1.Filter.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRolesRequest();
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
                    message.sort.push(base_1.Sort.decode(reader, reader.uint32()));
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.filter.push(base_1.Filter.decode(reader, reader.uint32()));
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
            sort: globalThis.Array.isArray(object?.sort) ? object.sort.map((e) => base_1.Sort.fromJSON(e)) : [],
            filter: globalThis.Array.isArray(object?.filter) ? object.filter.map((e) => base_1.Filter.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationRequest.toJSON(message.pagination);
        }
        if (message.sort?.length) {
            obj.sort = message.sort.map((e) => base_1.Sort.toJSON(e));
        }
        if (message.filter?.length) {
            obj.filter = message.filter.map((e) => base_1.Filter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetUserRolesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserRolesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sort = object.sort?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filter = object.filter?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetUserRolesResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetUserRolesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.UserRole.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRolesResponse();
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
                    message.data.push(exports.UserRole.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.UserRole.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.UserRole.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetUserRolesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserRolesResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.UserRole.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateUserRoleRequest() {
    return { userRole: undefined, userId: "" };
}
exports.CreateUserRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRole !== undefined) {
            exports.CreateUserRoleData.encode(message.userRole, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userRole = exports.CreateUserRoleData.decode(reader, reader.uint32());
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
            userRole: isSet(object.userRole) ? exports.CreateUserRoleData.fromJSON(object.userRole) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userRole !== undefined) {
            obj.userRole = exports.CreateUserRoleData.toJSON(message.userRole);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRoleRequest();
        message.userRole = (object.userRole !== undefined && object.userRole !== null)
            ? exports.CreateUserRoleData.fromPartial(object.userRole)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateUserRoleRequest() {
    return { userRole: undefined, userId: "" };
}
exports.UpdateUserRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRole !== undefined) {
            exports.UserRole.encode(message.userRole, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userRole = exports.UserRole.decode(reader, reader.uint32());
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
            userRole: isSet(object.userRole) ? exports.UserRole.fromJSON(object.userRole) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userRole !== undefined) {
            obj.userRole = exports.UserRole.toJSON(message.userRole);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateUserRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateUserRoleRequest();
        message.userRole = (object.userRole !== undefined && object.userRole !== null)
            ? exports.UserRole.fromPartial(object.userRole)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteUserRoleRequest() {
    return { userRoleId: "", userId: "" };
}
exports.DeleteUserRoleRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRoleId !== "") {
            writer.uint32(10).string(message.userRoleId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.userRoleId = reader.string();
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
            userRoleId: isSet(object.userRoleId) ? globalThis.String(object.userRoleId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userRoleId !== "") {
            obj.userRoleId = message.userRoleId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserRoleRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteUserRoleRequest();
        message.userRoleId = object.userRoleId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { userRole: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userRole !== undefined) {
            exports.UserRole.encode(message.userRole, writer.uint32(10).fork()).join();
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
                    message.userRole = exports.UserRole.decode(reader, reader.uint32());
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
            userRole: isSet(object.userRole) ? exports.UserRole.fromJSON(object.userRole) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userRole !== undefined) {
            obj.userRole = exports.UserRole.toJSON(message.userRole);
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
        message.userRole = (object.userRole !== undefined && object.userRole !== null)
            ? exports.UserRole.fromPartial(object.userRole)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
exports.UserRoleServiceServiceName = "user_role.v1.UserRoleService";
class UserRoleServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.UserRoleServiceServiceName;
        this.rpc = rpc;
        this.GetUserRole = this.GetUserRole.bind(this);
        this.GetUserRoles = this.GetUserRoles.bind(this);
        this.CreateUserRole = this.CreateUserRole.bind(this);
        this.UpdateUserRole = this.UpdateUserRole.bind(this);
        this.DeleteUserRole = this.DeleteUserRole.bind(this);
    }
    GetUserRole(request) {
        const data = exports.GetUserRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetUserRole", data);
        return promise.then((data) => exports.UserRole.decode(new wire_1.BinaryReader(data)));
    }
    GetUserRoles(request) {
        const data = exports.GetUserRolesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetUserRoles", data);
        return promise.then((data) => exports.GetUserRolesRequest.decode(new wire_1.BinaryReader(data)));
    }
    CreateUserRole(request) {
        const data = exports.CreateUserRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateUserRole", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateUserRole(request) {
        const data = exports.UpdateUserRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateUserRole", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteUserRole(request) {
        const data = exports.DeleteUserRoleRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteUserRole", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.UserRoleServiceClientImpl = UserRoleServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user-role.js.map