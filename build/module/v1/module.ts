// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: module/v1/module.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  CreateSuccess,
  DeleteSuccess,
  Filter,
  PaginationRequest,
  PaginationResponse,
  Sort,
  UpdateSuccess,
} from "../../base/v1/base";

export const protobufPackage = "module.v1";

export interface Module {
  moduleId: string;
  name: string;
  description: string;
}

export interface GetModuleRequest {
  moduleId: string;
}

export interface GetModulesRequest {
  pagination: PaginationRequest | undefined;
  sort: Sort[];
  filter: Filter[];
}

export interface GetModulesResponse {
  pagination: PaginationResponse | undefined;
  data: Module[];
}

function createBaseModule(): Module {
  return { moduleId: "", name: "", description: "" };
}

export const Module: MessageFns<Module> = {
  encode(message: Module, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.moduleId !== "") {
      writer.uint32(10).string(message.moduleId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
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

          message.description = reader.string();
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

  fromJSON(object: any): Module {
    return {
      moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.moduleId !== "") {
      obj.moduleId = message.moduleId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Module>, I>>(base?: I): Module {
    return Module.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.moduleId = object.moduleId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseGetModuleRequest(): GetModuleRequest {
  return { moduleId: "" };
}

export const GetModuleRequest: MessageFns<GetModuleRequest> = {
  encode(message: GetModuleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.moduleId !== "") {
      writer.uint32(10).string(message.moduleId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetModuleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModuleRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetModuleRequest {
    return { moduleId: isSet(object.moduleId) ? globalThis.String(object.moduleId) : "" };
  },

  toJSON(message: GetModuleRequest): unknown {
    const obj: any = {};
    if (message.moduleId !== "") {
      obj.moduleId = message.moduleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetModuleRequest>, I>>(base?: I): GetModuleRequest {
    return GetModuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetModuleRequest>, I>>(object: I): GetModuleRequest {
    const message = createBaseGetModuleRequest();
    message.moduleId = object.moduleId ?? "";
    return message;
  },
};

function createBaseGetModulesRequest(): GetModulesRequest {
  return { pagination: undefined, sort: [], filter: [] };
}

export const GetModulesRequest: MessageFns<GetModulesRequest> = {
  encode(message: GetModulesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationRequest.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.sort) {
      Sort.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.filter) {
      Filter.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetModulesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pagination = PaginationRequest.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.sort.push(Sort.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.filter.push(Filter.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetModulesRequest {
    return {
      pagination: isSet(object.pagination) ? PaginationRequest.fromJSON(object.pagination) : undefined,
      sort: globalThis.Array.isArray(object?.sort) ? object.sort.map((e: any) => Sort.fromJSON(e)) : [],
      filter: globalThis.Array.isArray(object?.filter) ? object.filter.map((e: any) => Filter.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetModulesRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationRequest.toJSON(message.pagination);
    }
    if (message.sort?.length) {
      obj.sort = message.sort.map((e) => Sort.toJSON(e));
    }
    if (message.filter?.length) {
      obj.filter = message.filter.map((e) => Filter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetModulesRequest>, I>>(base?: I): GetModulesRequest {
    return GetModulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetModulesRequest>, I>>(object: I): GetModulesRequest {
    const message = createBaseGetModulesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationRequest.fromPartial(object.pagination)
      : undefined;
    message.sort = object.sort?.map((e) => Sort.fromPartial(e)) || [];
    message.filter = object.filter?.map((e) => Filter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetModulesResponse(): GetModulesResponse {
  return { pagination: undefined, data: [] };
}

export const GetModulesResponse: MessageFns<GetModulesResponse> = {
  encode(message: GetModulesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.data) {
      Module.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetModulesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetModulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.pagination = PaginationResponse.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.data.push(Module.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetModulesResponse {
    return {
      pagination: isSet(object.pagination) ? PaginationResponse.fromJSON(object.pagination) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Module.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetModulesResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationResponse.toJSON(message.pagination);
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Module.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetModulesResponse>, I>>(base?: I): GetModulesResponse {
    return GetModulesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetModulesResponse>, I>>(object: I): GetModulesResponse {
    const message = createBaseGetModulesResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationResponse.fromPartial(object.pagination)
      : undefined;
    message.data = object.data?.map((e) => Module.fromPartial(e)) || [];
    return message;
  },
};

export interface ModuleService {
  GetModule(request: GetModuleRequest): Promise<Module>;
  GetModules(request: GetModulesRequest): Promise<GetModulesResponse>;
  CreateModule(request: Module): Promise<CreateSuccess>;
  UpdateModule(request: Module): Promise<UpdateSuccess>;
  DeleteModule(request: GetModuleRequest): Promise<DeleteSuccess>;
}

export const ModuleServiceServiceName = "module.v1.ModuleService";
export class ModuleServiceClientImpl implements ModuleService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ModuleServiceServiceName;
    this.rpc = rpc;
    this.GetModule = this.GetModule.bind(this);
    this.GetModules = this.GetModules.bind(this);
    this.CreateModule = this.CreateModule.bind(this);
    this.UpdateModule = this.UpdateModule.bind(this);
    this.DeleteModule = this.DeleteModule.bind(this);
  }
  GetModule(request: GetModuleRequest): Promise<Module> {
    const data = GetModuleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetModule", data);
    return promise.then((data) => Module.decode(new BinaryReader(data)));
  }

  GetModules(request: GetModulesRequest): Promise<GetModulesResponse> {
    const data = GetModulesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetModules", data);
    return promise.then((data) => GetModulesResponse.decode(new BinaryReader(data)));
  }

  CreateModule(request: Module): Promise<CreateSuccess> {
    const data = Module.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateModule", data);
    return promise.then((data) => CreateSuccess.decode(new BinaryReader(data)));
  }

  UpdateModule(request: Module): Promise<UpdateSuccess> {
    const data = Module.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateModule", data);
    return promise.then((data) => UpdateSuccess.decode(new BinaryReader(data)));
  }

  DeleteModule(request: GetModuleRequest): Promise<DeleteSuccess> {
    const data = GetModuleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteModule", data);
    return promise.then((data) => DeleteSuccess.decode(new BinaryReader(data)));
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
