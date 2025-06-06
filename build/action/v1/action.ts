// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: action/v1/action.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  DeleteSuccess,
  ErrorResponse,
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
  requestType: ActionRequestType;
  url: string;
  method: string;
  createdAt: string;
  createdUserId: string;
  updatedAt: string;
  updatedUserId: string;
  deletedAt: string;
  deletedUserId: string;
}

export interface CreateActionData {
  resourceId: string;
  name: string;
  description: string;
  requestType: ActionRequestType;
  url: string;
  method: string;
}

export interface UpdateActionData {
  actionId: string;
  resourceId: string;
  name: string;
  description: string;
  requestType: ActionRequestType;
  url: string;
  method: string;
}

export interface GetActionRequest {
  actionId: string;
}

export interface GetActionsRequest {
  pagination: PaginationRequest | undefined;
  sorts: Sort[];
  filters: Filter[];
}

export interface GetActionsResponse {
  pagination: PaginationResponse | undefined;
  data: Action[];
}

export interface CreateActionRequest {
  action: CreateActionData | undefined;
  userId: string;
}

export interface UpdateActionRequest {
  action: UpdateActionData | undefined;
  userId: string;
}

export interface DeleteActionRequest {
  actionId: string;
  userId: string;
}

export interface CreateSuccess {
  action?: Action | undefined;
  error?: ErrorResponse | undefined;
}

function createBaseAction(): Action {
  return {
    actionId: "",
    resourceId: "",
    name: "",
    description: "",
    requestType: 0,
    url: "",
    method: "",
    createdAt: "",
    createdUserId: "",
    updatedAt: "",
    updatedUserId: "",
    deletedAt: "",
    deletedUserId: "",
  };
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
    if (message.requestType !== 0) {
      writer.uint32(40).int32(message.requestType);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.method !== "") {
      writer.uint32(58).string(message.method);
    }
    if (message.createdAt !== "") {
      writer.uint32(66).string(message.createdAt);
    }
    if (message.createdUserId !== "") {
      writer.uint32(74).string(message.createdUserId);
    }
    if (message.updatedAt !== "") {
      writer.uint32(82).string(message.updatedAt);
    }
    if (message.updatedUserId !== "") {
      writer.uint32(90).string(message.updatedUserId);
    }
    if (message.deletedAt !== "") {
      writer.uint32(98).string(message.deletedAt);
    }
    if (message.deletedUserId !== "") {
      writer.uint32(106).string(message.deletedUserId);
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
          if (tag !== 40) {
            break;
          }

          message.requestType = reader.int32() as any;
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
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.createdUserId = reader.string();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.updatedAt = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.updatedUserId = reader.string();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.deletedAt = reader.string();
          continue;
        }
        case 13: {
          if (tag !== 106) {
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

  fromJSON(object: any): Action {
    return {
      actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
      createdUserId: isSet(object.createdUserId) ? globalThis.String(object.createdUserId) : "",
      updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
      updatedUserId: isSet(object.updatedUserId) ? globalThis.String(object.updatedUserId) : "",
      deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
      deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
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
    if (message.requestType !== 0) {
      obj.requestType = actionRequestTypeToJSON(message.requestType);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.method !== "") {
      obj.method = message.method;
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

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.actionId = object.actionId ?? "";
    message.resourceId = object.resourceId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.requestType = object.requestType ?? 0;
    message.url = object.url ?? "";
    message.method = object.method ?? "";
    message.createdAt = object.createdAt ?? "";
    message.createdUserId = object.createdUserId ?? "";
    message.updatedAt = object.updatedAt ?? "";
    message.updatedUserId = object.updatedUserId ?? "";
    message.deletedAt = object.deletedAt ?? "";
    message.deletedUserId = object.deletedUserId ?? "";
    return message;
  },
};

function createBaseCreateActionData(): CreateActionData {
  return { resourceId: "", name: "", description: "", requestType: 0, url: "", method: "" };
}

export const CreateActionData: MessageFns<CreateActionData> = {
  encode(message: CreateActionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceId !== "") {
      writer.uint32(10).string(message.resourceId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.requestType !== 0) {
      writer.uint32(32).int32(message.requestType);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.method !== "") {
      writer.uint32(50).string(message.method);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateActionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateActionData();
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

          message.description = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.requestType = reader.int32() as any;
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.url = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
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

  fromJSON(object: any): CreateActionData {
    return {
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
    };
  },

  toJSON(message: CreateActionData): unknown {
    const obj: any = {};
    if (message.resourceId !== "") {
      obj.resourceId = message.resourceId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.requestType !== 0) {
      obj.requestType = actionRequestTypeToJSON(message.requestType);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateActionData>, I>>(base?: I): CreateActionData {
    return CreateActionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateActionData>, I>>(object: I): CreateActionData {
    const message = createBaseCreateActionData();
    message.resourceId = object.resourceId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.requestType = object.requestType ?? 0;
    message.url = object.url ?? "";
    message.method = object.method ?? "";
    return message;
  },
};

function createBaseUpdateActionData(): UpdateActionData {
  return { actionId: "", resourceId: "", name: "", description: "", requestType: 0, url: "", method: "" };
}

export const UpdateActionData: MessageFns<UpdateActionData> = {
  encode(message: UpdateActionData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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
    if (message.requestType !== 0) {
      writer.uint32(40).int32(message.requestType);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.method !== "") {
      writer.uint32(58).string(message.method);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateActionData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateActionData();
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
          if (tag !== 40) {
            break;
          }

          message.requestType = reader.int32() as any;
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

  fromJSON(object: any): UpdateActionData {
    return {
      actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
      resourceId: isSet(object.resourceId) ? globalThis.String(object.resourceId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      requestType: isSet(object.requestType) ? actionRequestTypeFromJSON(object.requestType) : 0,
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      method: isSet(object.method) ? globalThis.String(object.method) : "",
    };
  },

  toJSON(message: UpdateActionData): unknown {
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
    if (message.requestType !== 0) {
      obj.requestType = actionRequestTypeToJSON(message.requestType);
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.method !== "") {
      obj.method = message.method;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateActionData>, I>>(base?: I): UpdateActionData {
    return UpdateActionData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateActionData>, I>>(object: I): UpdateActionData {
    const message = createBaseUpdateActionData();
    message.actionId = object.actionId ?? "";
    message.resourceId = object.resourceId ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.requestType = object.requestType ?? 0;
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
  return { pagination: undefined, sorts: [], filters: [] };
}

export const GetActionsRequest: MessageFns<GetActionsRequest> = {
  encode(message: GetActionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationRequest.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.sorts) {
      Sort.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.filters) {
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

          message.sorts.push(Sort.decode(reader, reader.uint32()));
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
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
      sorts: globalThis.Array.isArray(object?.sorts) ? object.sorts.map((e: any) => Sort.fromJSON(e)) : [],
      filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetActionsRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationRequest.toJSON(message.pagination);
    }
    if (message.sorts?.length) {
      obj.sorts = message.sorts.map((e) => Sort.toJSON(e));
    }
    if (message.filters?.length) {
      obj.filters = message.filters.map((e) => Filter.toJSON(e));
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
    message.sorts = object.sorts?.map((e) => Sort.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
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

function createBaseCreateActionRequest(): CreateActionRequest {
  return { action: undefined, userId: "" };
}

export const CreateActionRequest: MessageFns<CreateActionRequest> = {
  encode(message: CreateActionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.action !== undefined) {
      CreateActionData.encode(message.action, writer.uint32(10).fork()).join();
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.action = CreateActionData.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateActionRequest {
    return {
      action: isSet(object.action) ? CreateActionData.fromJSON(object.action) : undefined,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: CreateActionRequest): unknown {
    const obj: any = {};
    if (message.action !== undefined) {
      obj.action = CreateActionData.toJSON(message.action);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateActionRequest>, I>>(base?: I): CreateActionRequest {
    return CreateActionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateActionRequest>, I>>(object: I): CreateActionRequest {
    const message = createBaseCreateActionRequest();
    message.action = (object.action !== undefined && object.action !== null)
      ? CreateActionData.fromPartial(object.action)
      : undefined;
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseUpdateActionRequest(): UpdateActionRequest {
  return { action: undefined, userId: "" };
}

export const UpdateActionRequest: MessageFns<UpdateActionRequest> = {
  encode(message: UpdateActionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.action !== undefined) {
      UpdateActionData.encode(message.action, writer.uint32(10).fork()).join();
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateActionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.action = UpdateActionData.decode(reader, reader.uint32());
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

  fromJSON(object: any): UpdateActionRequest {
    return {
      action: isSet(object.action) ? UpdateActionData.fromJSON(object.action) : undefined,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: UpdateActionRequest): unknown {
    const obj: any = {};
    if (message.action !== undefined) {
      obj.action = UpdateActionData.toJSON(message.action);
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateActionRequest>, I>>(base?: I): UpdateActionRequest {
    return UpdateActionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateActionRequest>, I>>(object: I): UpdateActionRequest {
    const message = createBaseUpdateActionRequest();
    message.action = (object.action !== undefined && object.action !== null)
      ? UpdateActionData.fromPartial(object.action)
      : undefined;
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseDeleteActionRequest(): DeleteActionRequest {
  return { actionId: "", userId: "" };
}

export const DeleteActionRequest: MessageFns<DeleteActionRequest> = {
  encode(message: DeleteActionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.actionId !== "") {
      writer.uint32(10).string(message.actionId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteActionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteActionRequest();
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

  fromJSON(object: any): DeleteActionRequest {
    return {
      actionId: isSet(object.actionId) ? globalThis.String(object.actionId) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
    };
  },

  toJSON(message: DeleteActionRequest): unknown {
    const obj: any = {};
    if (message.actionId !== "") {
      obj.actionId = message.actionId;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteActionRequest>, I>>(base?: I): DeleteActionRequest {
    return DeleteActionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteActionRequest>, I>>(object: I): DeleteActionRequest {
    const message = createBaseDeleteActionRequest();
    message.actionId = object.actionId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseCreateSuccess(): CreateSuccess {
  return { action: undefined, error: undefined };
}

export const CreateSuccess: MessageFns<CreateSuccess> = {
  encode(message: CreateSuccess, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.action !== undefined) {
      Action.encode(message.action, writer.uint32(10).fork()).join();
    }
    if (message.error !== undefined) {
      ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.action = Action.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.error = ErrorResponse.decode(reader, reader.uint32());
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

  fromJSON(object: any): CreateSuccess {
    return {
      action: isSet(object.action) ? Action.fromJSON(object.action) : undefined,
      error: isSet(object.error) ? ErrorResponse.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: CreateSuccess): unknown {
    const obj: any = {};
    if (message.action !== undefined) {
      obj.action = Action.toJSON(message.action);
    }
    if (message.error !== undefined) {
      obj.error = ErrorResponse.toJSON(message.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSuccess>, I>>(base?: I): CreateSuccess {
    return CreateSuccess.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSuccess>, I>>(object: I): CreateSuccess {
    const message = createBaseCreateSuccess();
    message.action = (object.action !== undefined && object.action !== null)
      ? Action.fromPartial(object.action)
      : undefined;
    message.error = (object.error !== undefined && object.error !== null)
      ? ErrorResponse.fromPartial(object.error)
      : undefined;
    return message;
  },
};

export interface ActionService {
  GetAction(request: GetActionRequest): Promise<Action>;
  GetActions(request: GetActionsRequest): Promise<GetActionsResponse>;
  CreateAction(request: CreateActionRequest): Promise<CreateSuccess>;
  UpdateAction(request: UpdateActionRequest): Promise<UpdateSuccess>;
  DeleteAction(request: DeleteActionRequest): Promise<DeleteSuccess>;
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

  CreateAction(request: CreateActionRequest): Promise<CreateSuccess> {
    const data = CreateActionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateAction", data);
    return promise.then((data) => CreateSuccess.decode(new BinaryReader(data)));
  }

  UpdateAction(request: UpdateActionRequest): Promise<UpdateSuccess> {
    const data = UpdateActionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAction", data);
    return promise.then((data) => UpdateSuccess.decode(new BinaryReader(data)));
  }

  DeleteAction(request: DeleteActionRequest): Promise<DeleteSuccess> {
    const data = DeleteActionRequest.encode(request).finish();
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
