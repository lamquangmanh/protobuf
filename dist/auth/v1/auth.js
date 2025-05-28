"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceClientImpl = exports.AuthServiceServiceName = exports.VerifyResponse = exports.VerifyRequest = exports.GetMeResponse = exports.GetMeRequest = exports.LoginResponse = exports.LoginRequest = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "auth.v1";
function createBaseLoginRequest() {
    return { email: "", password: "" };
}
exports.LoginRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.LoginRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginRequest();
        message.email = object.email ?? "";
        message.password = object.password ?? "";
        return message;
    },
};
function createBaseLoginResponse() {
    return { accessToken: "", refreshToken: "" };
}
exports.LoginResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.accessToken !== "") {
            writer.uint32(10).string(message.accessToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(18).string(message.refreshToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.accessToken = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.refreshToken = reader.string();
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
            accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
            refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accessToken !== "") {
            obj.accessToken = message.accessToken;
        }
        if (message.refreshToken !== "") {
            obj.refreshToken = message.refreshToken;
        }
        return obj;
    },
    create(base) {
        return exports.LoginResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseLoginResponse();
        message.accessToken = object.accessToken ?? "";
        message.refreshToken = object.refreshToken ?? "";
        return message;
    },
};
function createBaseGetMeRequest() {
    return { userId: "" };
}
exports.GetMeRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMeRequest();
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
        return exports.GetMeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMeRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetMeResponse() {
    return { userId: "", email: "", username: "", avatar: undefined, phone: undefined, status: "" };
}
exports.GetMeResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        if (message.avatar !== undefined) {
            writer.uint32(34).string(message.avatar);
        }
        if (message.phone !== undefined) {
            writer.uint32(42).string(message.phone);
        }
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMeResponse();
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
                    message.email = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.avatar = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.phone = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.status = reader.string();
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
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : undefined,
            phone: isSet(object.phone) ? globalThis.String(object.phone) : undefined,
            status: isSet(object.status) ? globalThis.String(object.status) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.avatar !== undefined) {
            obj.avatar = message.avatar;
        }
        if (message.phone !== undefined) {
            obj.phone = message.phone;
        }
        if (message.status !== "") {
            obj.status = message.status;
        }
        return obj;
    },
    create(base) {
        return exports.GetMeResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMeResponse();
        message.userId = object.userId ?? "";
        message.email = object.email ?? "";
        message.username = object.username ?? "";
        message.avatar = object.avatar ?? undefined;
        message.phone = object.phone ?? undefined;
        message.status = object.status ?? "";
        return message;
    },
};
function createBaseVerifyRequest() {
    return { token: "", requestType: "", method: "", url: "" };
}
exports.VerifyRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
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
        const message = createBaseVerifyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
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
            token: isSet(object.token) ? globalThis.String(object.token) : "",
            requestType: isSet(object.requestType) ? globalThis.String(object.requestType) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.token !== "") {
            obj.token = message.token;
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
        return exports.VerifyRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyRequest();
        message.token = object.token ?? "";
        message.requestType = object.requestType ?? "";
        message.method = object.method ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseVerifyResponse() {
    return { success: false };
}
exports.VerifyResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== false) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyResponse();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== false) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerifyResponse();
        message.success = object.success ?? false;
        return message;
    },
};
exports.AuthServiceServiceName = "auth.v1.AuthService";
class AuthServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.AuthServiceServiceName;
        this.rpc = rpc;
        this.Login = this.Login.bind(this);
        this.GetMe = this.GetMe.bind(this);
        this.Verify = this.Verify.bind(this);
    }
    Login(request) {
        const data = exports.LoginRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Login", data);
        return promise.then((data) => exports.LoginResponse.decode(new wire_1.BinaryReader(data)));
    }
    GetMe(request) {
        const data = exports.GetMeRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetMe", data);
        return promise.then((data) => exports.GetMeResponse.decode(new wire_1.BinaryReader(data)));
    }
    Verify(request) {
        const data = exports.VerifyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Verify", data);
        return promise.then((data) => exports.VerifyResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.AuthServiceClientImpl = AuthServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=auth.js.map