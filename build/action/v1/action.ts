// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: action/v1/action.proto

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

export const protobufPackage = "action.v1";

export enum ActionRequestType {
  VIEW = 0,
  HTTP = 1,
  GRAPHQL = 2,
  GRPC = 3,
  WEBSOCKET = 4,
  UNRECOGNIZED = -1,
}

export function actionRequestTypeFromJSON(object: any): ActionRequestType {
  switch (object) {
    case 0:
    case "VIEW":
      return ActionRequestType.VIEW;
    case 1:
    case "HTTP":
      return ActionRequestType.HTTP;
    case 2:
    case "GRAPHQL":
      return ActionRequestType.GRAPHQL;
    case 3:
    case "GRPC":
      return ActionRequestType.GRPC;
    case 4:
    case "WEBSOCKET":
      return ActionRequestType.WEBSOCKET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionRequestType.UNRECOGNIZED;
  }
}

export function actionRequestTypeToJSON(object: ActionRequestType): string {
  switch (object) {
    case ActionRequestType.VIEW:
      return "VIEW";
    case ActionRequestType.HTTP:
      return "HTTP";
    case ActionRequestType.GRAPHQL:
      return "GRAPHQL";
    case ActionRequestType.GRPC:
      return "GRPC";
    case ActionRequestType.WEBSOCKET:
      return "WEBSOCKET";
    case ActionRequestType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Action {
  actionId: string;
  resourceId: string;
  name: string;
  description: string;
  ActionRequestType: string;
  url: string;
  method: string;
}

export interface GetActionRequest {
  actionId: string;
}

export interface GetActionsRequest {
  pagination: PaginationRequest | undefined;
  sort: Sort[];
  filter: Filter[];
}

export interface GetActionsResponse {
  pagination: PaginationResponse | undefined;
  data: Action[];
}

function createBaseAction(): Action {
  return { actionId: "", resourceId: "", name: "", description: "", ActionRequestType: "", url: "", method: "" };
}

export const Action: MessageFns<Action> = {
  encode(message: Action, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
    if (message.ActionRequestType !== "") {
      writer.uint32(42).string(message.ActionRequestType);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.method !== "") {
      writer.uint32(58).string(message.method);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Action {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          if (tag !== 42) {
            break;
          }

          message.ActionRequestType = reader.string();
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

  fromJSON(object: any): Action {
    return {
      actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      ActionRequestType: isSet(object.ActionRequestType) ? globalThis.String(object.ActionRequestType) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
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
    if (message.ActionRequestType !== "") {
      obj.ActionRequestType = message.ActionRequestType;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.actionId = object.actionId ?? "";
    message.resourceId = object.resourceId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.ActionRequestType = object.ActionRequestType ?? "";
    message.url = object.url ?? "";
    message.method = object.method ?? "";
    return message;
  },
};

function createBaseGetActionRequest(): GetActionRequest {
  return { actionId: "" };
}

export const GetActionRequest: MessageFns<GetActionRequest> = {
  encode(message: GetActionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.actionId !== "") {
      writer.uint32(10).string(message.actionId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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

  fromJSON(object: any): GetActionRequest {
    return { actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "" };
  },

  toJSON(message: GetActionRequest): unknown {
    const obj: any = {};
    if (message.actionId !== "") {
      obj.actionId = message.actionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetActionRequest>, I>>(base?: I): GetActionRequest {
    return GetActionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActionRequest>, I>>(object: I): GetActionRequest {
    const message = createBaseGetActionRequest();
    message.actionId = object.actionId ?? "";
    return message;
  },
};

function createBaseGetActionsRequest(): GetActionsRequest {
  return { pagination: undefined, sort: [], filter: [] };
}

export const GetActionsRequest: MessageFns<GetActionsRequest> = {
  encode(message: GetActionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): GetActionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActionsRequest();
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

  fromJSON(object: any): GetActionsRequest {
    return {
      pagination: isSet(object.pagination) ? PaginationRequest.fromJSON(object.pagination) : undefined,
      sort: globalThis.Array.isArray(object?.sort) ? object.sort.map((e: any) => Sort.fromJSON(e)) : [],
      filter: globalThis.Array.isArray(object?.filter) ? object.filter.map((e: any) => Filter.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetActionsRequest): unknown {
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

  create<I extends Exact<DeepPartial<GetActionsRequest>, I>>(base?: I): GetActionsRequest {
    return GetActionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActionsRequest>, I>>(object: I): GetActionsRequest {
    const message = createBaseGetActionsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationRequest.fromPartial(object.pagination)
      : undefined;
    message.sort = object.sort?.map((e) => Sort.fromPartial(e)) || [];
    message.filter = object.filter?.map((e) => Filter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetActionsResponse(): GetActionsResponse {
  return { pagination: undefined, data: [] };
}

export const GetActionsResponse: MessageFns<GetActionsResponse> = {
  encode(message: GetActionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.data) {
      Action.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetActionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetActionsResponse();
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

          message.data.push(Action.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetActionsResponse {
    return {
      pagination: isSet(object.pagination) ? PaginationResponse.fromJSON(object.pagination) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetActionsResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationResponse.toJSON(message.pagination);
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => Action.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetActionsResponse>, I>>(base?: I): GetActionsResponse {
    return GetActionsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetActionsResponse>, I>>(object: I): GetActionsResponse {
    const message = createBaseGetActionsResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationResponse.fromPartial(object.pagination)
      : undefined;
    message.data = object.data?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

export interface ActionService {
  GetAction(request: GetActionRequest): Promise<Action>;
  GetActions(request: GetActionsRequest): Promise<GetActionsResponse>;
  CreateAction(request: Action): Promise<CreateSuccess>;
  UpdateAction(request: Action): Promise<UpdateSuccess>;
  DeleteAction(request: GetActionRequest): Promise<DeleteSuccess>;
}

export const ActionServiceServiceName = "action.v1.ActionService";
export class ActionServiceClientImpl implements ActionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ActionServiceServiceName;
    this.rpc = rpc;
    this.GetAction = this.GetAction.bind(this);
    this.GetActions = this.GetActions.bind(this);
    this.CreateAction = this.CreateAction.bind(this);
    this.UpdateAction = this.UpdateAction.bind(this);
    this.DeleteAction = this.DeleteAction.bind(this);
  }
  GetAction(request: GetActionRequest): Promise<Action> {
    const data = GetActionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetAction", data);
    return promise.then((data) => Action.decode(new BinaryReader(data)));
  }

  GetActions(request: GetActionsRequest): Promise<GetActionsResponse> {
    const data = GetActionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetActions", data);
    return promise.then((data) => GetActionsResponse.decode(new BinaryReader(data)));
  }

  CreateAction(request: Action): Promise<CreateSuccess> {
    const data = Action.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateAction", data);
    return promise.then((data) => CreateSuccess.decode(new BinaryReader(data)));
  }

  UpdateAction(request: Action): Promise<UpdateSuccess> {
    const data = Action.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAction", data);
    return promise.then((data) => UpdateSuccess.decode(new BinaryReader(data)));
  }

  DeleteAction(request: GetActionRequest): Promise<DeleteSuccess> {
    const data = GetActionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteAction", data);
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
