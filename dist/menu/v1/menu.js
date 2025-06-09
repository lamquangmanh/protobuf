"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuServiceClientImpl = exports.MenuServiceServiceName = exports.GetMenusResponse = exports.GetMenusRequest = exports.GetSuperMenuResponse = exports.GetSuperMenuRequest = exports.SuperMenu = exports.Menu = exports.SubMenu = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "menu.v1";
function createBaseSubMenu() {
    return { actionId: "", name: "", url: "", method: "", requestType: "" };
}
exports.SubMenu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.actionId !== "") {
            writer.uint32(10).string(message.actionId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.method !== "") {
            writer.uint32(34).string(message.method);
        }
        if (message.requestType !== "") {
            writer.uint32(42).string(message.requestType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubMenu();
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
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.requestType = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            method: isSet(object.method) ? globalThis.String(object.method) : "",
            requestType: isSet(object.requestType) ? globalThis.String(object.requestType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.actionId !== "") {
            obj.actionId = message.actionId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.method !== "") {
            obj.method = message.method;
        }
        if (message.requestType !== "") {
            obj.requestType = message.requestType;
        }
        return obj;
    },
    create(base) {
        return exports.SubMenu.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubMenu();
        message.actionId = object.actionId ?? "";
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.method = object.method ?? "";
        message.requestType = object.requestType ?? "";
        return message;
    },
};
function createBaseMenu() {
    return { resourceId: "", name: "", url: "", subMenus: [] };
}
exports.Menu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.resourceId !== "") {
            writer.uint32(10).string(message.resourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        for (const v of message.subMenus) {
            exports.SubMenu.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMenu();
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
                    message.url = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.subMenus.push(exports.SubMenu.decode(reader, reader.uint32()));
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
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            subMenus: globalThis.Array.isArray(object?.subMenus) ? object.subMenus.map((e) => exports.SubMenu.fromJSON(e)) : [],
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
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.subMenus?.length) {
            obj.subMenus = message.subMenus.map((e) => exports.SubMenu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.Menu.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMenu();
        message.resourceId = object.resourceId ?? "";
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.subMenus = object.subMenus?.map((e) => exports.SubMenu.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSuperMenu() {
    return { moduleId: "", name: "", url: "", menus: [] };
}
exports.SuperMenu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.moduleId !== "") {
            writer.uint32(10).string(message.moduleId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        for (const v of message.menus) {
            exports.Menu.encode(v, writer.uint32(34).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperMenu();
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
                    message.url = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.menus.push(exports.Menu.decode(reader, reader.uint32()));
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
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            menus: globalThis.Array.isArray(object?.menus) ? object.menus.map((e) => exports.Menu.fromJSON(e)) : [],
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
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.menus?.length) {
            obj.menus = message.menus.map((e) => exports.Menu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.SuperMenu.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSuperMenu();
        message.moduleId = object.moduleId ?? "";
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.menus = object.menus?.map((e) => exports.Menu.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetSuperMenuRequest() {
    return { userId: "" };
}
exports.GetSuperMenuRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSuperMenuRequest();
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
        return exports.GetSuperMenuRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSuperMenuRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetSuperMenuResponse() {
    return { superMenus: [] };
}
exports.GetSuperMenuResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.superMenus) {
            exports.SuperMenu.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSuperMenuResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.superMenus.push(exports.SuperMenu.decode(reader, reader.uint32()));
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
            superMenus: globalThis.Array.isArray(object?.superMenus)
                ? object.superMenus.map((e) => exports.SuperMenu.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superMenus?.length) {
            obj.superMenus = message.superMenus.map((e) => exports.SuperMenu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetSuperMenuResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetSuperMenuResponse();
        message.superMenus = object.superMenus?.map((e) => exports.SuperMenu.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetMenusRequest() {
    return { userId: "" };
}
exports.GetMenusRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMenusRequest();
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
        return exports.GetMenusRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMenusRequest();
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseGetMenusResponse() {
    return { menus: [] };
}
exports.GetMenusResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.menus) {
            exports.Menu.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMenusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.menus.push(exports.Menu.decode(reader, reader.uint32()));
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
        return { menus: globalThis.Array.isArray(object?.menus) ? object.menus.map((e) => exports.Menu.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.menus?.length) {
            obj.menus = message.menus.map((e) => exports.Menu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetMenusResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetMenusResponse();
        message.menus = object.menus?.map((e) => exports.Menu.fromPartial(e)) || [];
        return message;
    },
};
exports.MenuServiceServiceName = "menu.v1.MenuService";
class MenuServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MenuServiceServiceName;
        this.rpc = rpc;
        this.GetSuperMenus = this.GetSuperMenus.bind(this);
        this.GetMenus = this.GetMenus.bind(this);
    }
    GetSuperMenus(request) {
        const data = exports.GetSuperMenuRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetSuperMenus", data);
        return promise.then((data) => exports.GetSuperMenuResponse.decode(new wire_1.BinaryReader(data)));
    }
    GetMenus(request) {
        const data = exports.GetMenusRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetMenus", data);
        return promise.then((data) => exports.GetMenusResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.MenuServiceClientImpl = MenuServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=menu.js.map