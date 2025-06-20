// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: menu/v1/menu.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "menu.v1";

export interface SubMenu {
  name: string;
  url: string;
}

export interface Menu {
  name: string;
  url: string;
  icon?:
    | string
    | undefined;
  /** Nested sub-menus */
  subMenus: SubMenu[];
}

export interface SuperMenu {
  name: string;
  url: string;
  description: string;
  icon?:
    | string
    | undefined;
  /** Nested sub-menus */
  menus: Menu[];
}

export interface GetSuperMenuRequest {
  userId: string;
}

export interface GetSuperMenuResponse {
  superMenus: SuperMenu[];
}

function createBaseSubMenu(): SubMenu {
  return { name: "", url: "" };
}

export const SubMenu: MessageFns<SubMenu> = {
  encode(message: SubMenu, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubMenu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): SubMenu {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
    };
  },

  toJSON(message: SubMenu): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubMenu>, I>>(base?: I): SubMenu {
    return SubMenu.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubMenu>, I>>(object: I): SubMenu {
    const message = createBaseSubMenu();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseMenu(): Menu {
  return { name: "", url: "", icon: undefined, subMenus: [] };
}

export const Menu: MessageFns<Menu> = {
  encode(message: Menu, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
      SubMenu.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Menu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

          message.subMenus.push(SubMenu.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Menu {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
      subMenus: globalThis.Array.isArray(object?.subMenus) ? object.subMenus.map((e: any) => SubMenu.fromJSON(e)) : [],
    };
  },

  toJSON(message: Menu): unknown {
    const obj: any = {};
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
      obj.subMenus = message.subMenus.map((e) => SubMenu.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Menu>, I>>(base?: I): Menu {
    return Menu.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Menu>, I>>(object: I): Menu {
    const message = createBaseMenu();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.icon = object.icon ?? undefined;
    message.subMenus = object.subMenus?.map((e) => SubMenu.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSuperMenu(): SuperMenu {
  return { name: "", url: "", description: "", icon: undefined, menus: [] };
}

export const SuperMenu: MessageFns<SuperMenu> = {
  encode(message: SuperMenu, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
      Menu.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SuperMenu {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

          message.menus.push(Menu.decode(reader, reader.uint32()));
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

  fromJSON(object: any): SuperMenu {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
      menus: globalThis.Array.isArray(object?.menus) ? object.menus.map((e: any) => Menu.fromJSON(e)) : [],
    };
  },

  toJSON(message: SuperMenu): unknown {
    const obj: any = {};
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
      obj.menus = message.menus.map((e) => Menu.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SuperMenu>, I>>(base?: I): SuperMenu {
    return SuperMenu.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SuperMenu>, I>>(object: I): SuperMenu {
    const message = createBaseSuperMenu();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.description = object.description ?? "";
    message.icon = object.icon ?? undefined;
    message.menus = object.menus?.map((e) => Menu.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetSuperMenuRequest(): GetSuperMenuRequest {
  return { userId: "" };
}

export const GetSuperMenuRequest: MessageFns<GetSuperMenuRequest> = {
  encode(message: GetSuperMenuRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSuperMenuRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): GetSuperMenuRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetSuperMenuRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSuperMenuRequest>, I>>(base?: I): GetSuperMenuRequest {
    return GetSuperMenuRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSuperMenuRequest>, I>>(object: I): GetSuperMenuRequest {
    const message = createBaseGetSuperMenuRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetSuperMenuResponse(): GetSuperMenuResponse {
  return { superMenus: [] };
}

export const GetSuperMenuResponse: MessageFns<GetSuperMenuResponse> = {
  encode(message: GetSuperMenuResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.superMenus) {
      SuperMenu.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSuperMenuResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSuperMenuResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.superMenus.push(SuperMenu.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetSuperMenuResponse {
    return {
      superMenus: globalThis.Array.isArray(object?.superMenus)
        ? object.superMenus.map((e: any) => SuperMenu.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetSuperMenuResponse): unknown {
    const obj: any = {};
    if (message.superMenus?.length) {
      obj.superMenus = message.superMenus.map((e) => SuperMenu.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSuperMenuResponse>, I>>(base?: I): GetSuperMenuResponse {
    return GetSuperMenuResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetSuperMenuResponse>, I>>(object: I): GetSuperMenuResponse {
    const message = createBaseGetSuperMenuResponse();
    message.superMenus = object.superMenus?.map((e) => SuperMenu.fromPartial(e)) || [];
    return message;
  },
};

export interface MenuService {
  GetSuperMenus(request: GetSuperMenuRequest): Promise<GetSuperMenuResponse>;
}

export const MenuServiceServiceName = "menu.v1.MenuService";
export class MenuServiceClientImpl implements MenuService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MenuServiceServiceName;
    this.rpc = rpc;
    this.GetSuperMenus = this.GetSuperMenus.bind(this);
  }
  GetSuperMenus(request: GetSuperMenuRequest): Promise<GetSuperMenuResponse> {
    const data = GetSuperMenuRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetSuperMenus", data);
    return promise.then((data) => GetSuperMenuResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
