"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceClientImpl = exports.UserServiceServiceName = exports.ChangePasswordRequest = exports.CreateSuccess = exports.DeleteUserRequest = exports.UpdateUserRequest = exports.CreateUserRequest = exports.GetUsersResponse = exports.GetUsersRequest = exports.GetUserRequest = exports.UpdateUserData = exports.CreateUserData = exports.User = exports.UserStatus = exports.protobufPackage = void 0;
exports.userStatusFromJSON = userStatusFromJSON;
exports.userStatusToJSON = userStatusToJSON;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "user.v1";
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["USER_STATUS_UNSPECIFIED"] = 0] = "USER_STATUS_UNSPECIFIED";
    UserStatus[UserStatus["ACTIVE"] = 1] = "ACTIVE";
    UserStatus[UserStatus["DEACTIVATED"] = 2] = "DEACTIVATED";
    UserStatus[UserStatus["DELETED"] = 3] = "DELETED";
    UserStatus[UserStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
function userStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_STATUS_UNSPECIFIED":
            return UserStatus.USER_STATUS_UNSPECIFIED;
        case 1:
        case "ACTIVE":
            return UserStatus.ACTIVE;
        case 2:
        case "DEACTIVATED":
            return UserStatus.DEACTIVATED;
        case 3:
        case "DELETED":
            return UserStatus.DELETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserStatus.UNRECOGNIZED;
    }
}
function userStatusToJSON(object) {
    switch (object) {
        case UserStatus.USER_STATUS_UNSPECIFIED:
            return "USER_STATUS_UNSPECIFIED";
        case UserStatus.ACTIVE:
            return "ACTIVE";
        case UserStatus.DEACTIVATED:
            return "DEACTIVATED";
        case UserStatus.DELETED:
            return "DELETED";
        case UserStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseUser() {
    return {
        userId: "",
        username: "",
        email: "",
        phone: "",
        avatar: "",
        status: 0,
        createdAt: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
    };
}
exports.User = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.username !== "") {
            writer.uint32(18).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        if (message.phone !== "") {
            writer.uint32(34).string(message.phone);
        }
        if (message.avatar !== "") {
            writer.uint32(42).string(message.avatar);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        if (message.createdAt !== "") {
            writer.uint32(58).string(message.createdAt);
        }
        if (message.createdUserId !== "") {
            writer.uint32(66).string(message.createdUserId);
        }
        if (message.updatedAt !== "") {
            writer.uint32(74).string(message.updatedAt);
        }
        if (message.updatedUserId !== "") {
            writer.uint32(82).string(message.updatedUserId);
        }
        if (message.deletedAt !== "") {
            writer.uint32(90).string(message.deletedAt);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(98).string(message.deletedUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
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
                    message.username = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.avatar = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.createdAt = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.createdUserId = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.updatedUserId = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.deletedAt = reader.string();
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
            status: isSet(object.status) ? userStatusFromJSON(object.status) : 0,
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
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.avatar !== "") {
            obj.avatar = message.avatar;
        }
        if (message.status !== 0) {
            obj.status = userStatusToJSON(message.status);
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
        return exports.User.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUser();
        message.userId = object.userId ?? "";
        message.username = object.username ?? "";
        message.email = object.email ?? "";
        message.phone = object.phone ?? "";
        message.avatar = object.avatar ?? "";
        message.status = object.status ?? 0;
        message.createdAt = object.createdAt ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        return message;
    },
};
function createBaseCreateUserData() {
    return { username: "", email: "", password: "", phone: "", avatar: "", status: 0, roleIds: [] };
}
exports.CreateUserData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.password !== "") {
            writer.uint32(26).string(message.password);
        }
        if (message.phone !== "") {
            writer.uint32(34).string(message.phone);
        }
        if (message.avatar !== "") {
            writer.uint32(42).string(message.avatar);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        for (const v of message.roleIds) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.avatar = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.roleIds.push(reader.string());
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
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
            status: isSet(object.status) ? userStatusFromJSON(object.status) : 0,
            roleIds: globalThis.Array.isArray(object?.roleIds) ? object.roleIds.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.avatar !== "") {
            obj.avatar = message.avatar;
        }
        if (message.status !== 0) {
            obj.status = userStatusToJSON(message.status);
        }
        if (message.roleIds?.length) {
            obj.roleIds = message.roleIds;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserData();
        message.username = object.username ?? "";
        message.email = object.email ?? "";
        message.password = object.password ?? "";
        message.phone = object.phone ?? "";
        message.avatar = object.avatar ?? "";
        message.status = object.status ?? 0;
        message.roleIds = object.roleIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseUpdateUserData() {
    return { username: "", email: "", phone: "", avatar: "", status: 0, roleIds: [], userId: "" };
}
exports.UpdateUserData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.phone !== "") {
            writer.uint32(34).string(message.phone);
        }
        if (message.avatar !== "") {
            writer.uint32(42).string(message.avatar);
        }
        if (message.status !== 0) {
            writer.uint32(48).int32(message.status);
        }
        for (const v of message.roleIds) {
            writer.uint32(58).string(v);
        }
        if (message.userId !== "") {
            writer.uint32(66).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.avatar = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.roleIds.push(reader.string());
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
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
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
            avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
            status: isSet(object.status) ? userStatusFromJSON(object.status) : 0,
            roleIds: globalThis.Array.isArray(object?.roleIds) ? object.roleIds.map((e) => globalThis.String(e)) : [],
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phone !== "") {
            obj.phone = message.phone;
        }
        if (message.avatar !== "") {
            obj.avatar = message.avatar;
        }
        if (message.status !== 0) {
            obj.status = userStatusToJSON(message.status);
        }
        if (message.roleIds?.length) {
            obj.roleIds = message.roleIds;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateUserData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateUserData();
        message.username = object.username ?? "";
        message.email = object.email ?? "";
        message.phone = object.phone ?? "";
        message.avatar = object.avatar ?? "";
        message.status = object.status ?? 0;
        message.roleIds = object.roleIds?.map((e) => e) || [];
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetUserRequest() {
    return { userId: "" };
}
exports.GetUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRequest();
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
        return exports.GetUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetUsersRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetUsersRequest = {
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
        const message = createBaseGetUsersRequest();
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
        return exports.GetUsersRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUsersRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetUsersResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetUsersResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.User.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUsersResponse();
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
                    message.data.push(exports.User.decode(reader, reader.uint32()));
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
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.User.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.User.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetUsersResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUsersResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.User.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { user: undefined, userId: "" };
}
exports.CreateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.user !== undefined) {
            exports.CreateUserData.encode(message.user, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.CreateUserData.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.CreateUserData.fromJSON(object.user) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.CreateUserData.toJSON(message.user);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRequest();
        message.user = (object.user !== undefined && object.user !== null)
            ? exports.CreateUserData.fromPartial(object.user)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateUserRequest() {
    return { user: undefined, userId: "" };
}
exports.UpdateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.user !== undefined) {
            exports.UpdateUserData.encode(message.user, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.UpdateUserData.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.UpdateUserData.fromJSON(object.user) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.UpdateUserData.toJSON(message.user);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateUserRequest();
        message.user = (object.user !== undefined && object.user !== null)
            ? exports.UpdateUserData.fromPartial(object.user)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteUserRequest() {
    return { userId: "", deletedUserId: "" };
}
exports.DeleteUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(18).string(message.deletedUserId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteUserRequest();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.deletedUserId !== "") {
            obj.deletedUserId = message.deletedUserId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteUserRequest();
        message.userId = object.userId ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { user: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.user !== undefined) {
            exports.User.encode(message.user, writer.uint32(10).fork()).join();
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
                    message.user = exports.User.decode(reader, reader.uint32());
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
            user: isSet(object.user) ? exports.User.fromJSON(object.user) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.user !== undefined) {
            obj.user = exports.User.toJSON(message.user);
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
        message.user = (object.user !== undefined && object.user !== null) ? exports.User.fromPartial(object.user) : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseChangePasswordRequest() {
    return { userId: "", password: "" };
}
exports.ChangePasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChangePasswordRequest();
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
                    message.password = reader.string();
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
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.ChangePasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseChangePasswordRequest();
        message.userId = object.userId ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
exports.UserServiceServiceName = "user.v1.UserService";
class UserServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.UserServiceServiceName;
        this.rpc = rpc;
        this.GetUser = this.GetUser.bind(this);
        this.GetUsers = this.GetUsers.bind(this);
        this.CreateUser = this.CreateUser.bind(this);
        this.UpdateUser = this.UpdateUser.bind(this);
        this.DeleteUser = this.DeleteUser.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
    }
    GetUser(request) {
        const data = exports.GetUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetUser", data);
        return promise.then((data) => exports.User.decode(new wire_1.BinaryReader(data)));
    }
    GetUsers(request) {
        const data = exports.GetUsersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetUsers", data);
        return promise.then((data) => exports.GetUsersResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateUser(request) {
        const data = exports.CreateUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateUser", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateUser(request) {
        const data = exports.UpdateUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateUser", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteUser(request) {
        const data = exports.DeleteUserRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteUser", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
    ChangePassword(request) {
        const data = exports.ChangePasswordRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ChangePassword", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.UserServiceClientImpl = UserServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user.js.map