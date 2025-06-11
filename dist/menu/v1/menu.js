"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuServiceClientImpl = exports.MenuServiceServiceName = exports.GetSuperMenuResponse = exports.GetSuperMenuRequest = exports.SuperMenu = exports.Menu = exports.SubMenu = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "menu.v1";
function createBaseSubMenu() {
    return { name: "", url: "" };
}
exports.SubMenu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
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
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
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
            url: isSet(object.url) ? globalThis.String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        return obj;
    },
    create(base) {
        return exports.SubMenu.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSubMenu();
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseMenu() {
    return { name: "", url: "", icon: undefined, subMenus: [] };
}
exports.Menu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.icon !== undefined) {
            writer.uint32(26).string(message.icon);
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
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.icon = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
            subMenus: globalThis.Array.isArray(object?.subMenus) ? object.subMenus.map((e) => exports.SubMenu.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
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
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.icon = object.icon ?? undefined;
        message.subMenus = object.subMenus?.map((e) => exports.SubMenu.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSuperMenu() {
    return { name: "", url: "", description: "", icon: undefined, menus: [] };
}
exports.SuperMenu = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.icon !== undefined) {
            writer.uint32(34).string(message.icon);
        }
        for (const v of message.menus) {
            exports.Menu.encode(v, writer.uint32(42).fork()).join();
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
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.url = reader.string();
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
                    message.icon = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
            menus: globalThis.Array.isArray(object?.menus) ? object.menus.map((e) => exports.Menu.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
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
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.description = object.description ?? "";
        message.icon = object.icon ?? undefined;
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
exports.MenuServiceServiceName = "menu.v1.MenuService";
class MenuServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MenuServiceServiceName;
        this.rpc = rpc;
        this.GetSuperMenus = this.GetSuperMenus.bind(this);
    }
    GetSuperMenus(request) {
        const data = exports.GetSuperMenuRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetSuperMenus", data);
        return promise.then((data) => exports.GetSuperMenuResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.MenuServiceClientImpl = MenuServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=menu.js.map