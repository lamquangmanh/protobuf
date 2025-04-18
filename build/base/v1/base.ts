// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: base/v1/base.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "base.v1";

/** define enum */
export enum FilterOperator {
  EQUAL = 0,
  NOT_EQUAL = 1,
  GREATER_THAN = 2,
  LESS_THAN = 3,
  GREATER_THAN_OR_EQUAL = 4,
  LESS_THAN_OR_EQUAL = 5,
  LIKE = 6,
  IN = 7,
  NOT_IN = 8,
  UNRECOGNIZED = -1,
}

export function filterOperatorFromJSON(object: any): FilterOperator {
  switch (object) {
    case 0:
    case "EQUAL":
      return FilterOperator.EQUAL;
    case 1:
    case "NOT_EQUAL":
      return FilterOperator.NOT_EQUAL;
    case 2:
    case "GREATER_THAN":
      return FilterOperator.GREATER_THAN;
    case 3:
    case "LESS_THAN":
      return FilterOperator.LESS_THAN;
    case 4:
    case "GREATER_THAN_OR_EQUAL":
      return FilterOperator.GREATER_THAN_OR_EQUAL;
    case 5:
    case "LESS_THAN_OR_EQUAL":
      return FilterOperator.LESS_THAN_OR_EQUAL;
    case 6:
    case "LIKE":
      return FilterOperator.LIKE;
    case 7:
    case "IN":
      return FilterOperator.IN;
    case 8:
    case "NOT_IN":
      return FilterOperator.NOT_IN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FilterOperator.UNRECOGNIZED;
  }
}

export function filterOperatorToJSON(object: FilterOperator): string {
  switch (object) {
    case FilterOperator.EQUAL:
      return "EQUAL";
    case FilterOperator.NOT_EQUAL:
      return "NOT_EQUAL";
    case FilterOperator.GREATER_THAN:
      return "GREATER_THAN";
    case FilterOperator.LESS_THAN:
      return "LESS_THAN";
    case FilterOperator.GREATER_THAN_OR_EQUAL:
      return "GREATER_THAN_OR_EQUAL";
    case FilterOperator.LESS_THAN_OR_EQUAL:
      return "LESS_THAN_OR_EQUAL";
    case FilterOperator.LIKE:
      return "LIKE";
    case FilterOperator.IN:
      return "IN";
    case FilterOperator.NOT_IN:
      return "NOT_IN";
    case FilterOperator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SortOrder {
  UNSPECIFIED = 0,
  ASC = 1,
  DESC = 2,
  UNRECOGNIZED = -1,
}

export function sortOrderFromJSON(object: any): SortOrder {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return SortOrder.UNSPECIFIED;
    case 1:
    case "ASC":
      return SortOrder.ASC;
    case 2:
    case "DESC":
      return SortOrder.DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortOrder.UNRECOGNIZED;
  }
}

export function sortOrderToJSON(object: SortOrder): string {
  switch (object) {
    case SortOrder.UNSPECIFIED:
      return "UNSPECIFIED";
    case SortOrder.ASC:
      return "ASC";
    case SortOrder.DESC:
      return "DESC";
    case SortOrder.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** define message */
export interface PaginationRequest {
  page: number;
  limit: number;
}

export interface PaginationResponse {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  itemCount: number;
}

export interface Sort {
  /** created_at, updated_at */
  field: string;
  /** "ASC" or "DESC" */
  order: SortOrder;
}

export interface Filter {
  field: string;
  /** "eq", "ne", "gt", "lt", "gte", "lte", "like", "in", "nin" */
  operator: FilterOperator;
  /**
   * oneof value {
   *   string string_value = 3;
   *   int32 int_value = 4;
   *   double double_value = 5;
   *   bool bool_value = 6;
   *   google.protobuf.Timestamp timestamp_value = 7;
   *   repeated string array_string_value = 8;
   *   repeated int32 array_int_value = 9;
   *   repeated double array_double_value = 10;
   * }
   */
  value: Any | undefined;
}

export interface CreateSuccess {
  success: boolean;
}

export interface UpdateSuccess {
  success: boolean;
}

export interface DeleteSuccess {
  success: boolean;
}

function createBasePaginationRequest(): PaginationRequest {
  return { page: 0, limit: 0 };
}

export const PaginationRequest: MessageFns<PaginationRequest> = {
  encode(message: PaginationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaginationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.limit = reader.int32();
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

  fromJSON(object: any): PaginationRequest {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
    };
  },

  toJSON(message: PaginationRequest): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationRequest>, I>>(base?: I): PaginationRequest {
    return PaginationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginationRequest>, I>>(object: I): PaginationRequest {
    const message = createBasePaginationRequest();
    message.page = object.page ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBasePaginationResponse(): PaginationResponse {
  return { page: 0, limit: 0, totalItems: 0, totalPages: 0, itemCount: 0 };
}

export const PaginationResponse: MessageFns<PaginationResponse> = {
  encode(message: PaginationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.totalItems !== 0) {
      writer.uint32(24).int32(message.totalItems);
    }
    if (message.totalPages !== 0) {
      writer.uint32(32).int32(message.totalPages);
    }
    if (message.itemCount !== 0) {
      writer.uint32(40).int32(message.itemCount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaginationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaginationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.page = reader.int32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.limit = reader.int32();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.totalItems = reader.int32();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.totalPages = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.itemCount = reader.int32();
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

  fromJSON(object: any): PaginationResponse {
    return {
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      totalItems: isSet(object.totalItems) ? globalThis.Number(object.totalItems) : 0,
      totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
      itemCount: isSet(object.itemCount) ? globalThis.Number(object.itemCount) : 0,
    };
  },

  toJSON(message: PaginationResponse): unknown {
    const obj: any = {};
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.totalItems !== 0) {
      obj.totalItems = Math.round(message.totalItems);
    }
    if (message.totalPages !== 0) {
      obj.totalPages = Math.round(message.totalPages);
    }
    if (message.itemCount !== 0) {
      obj.itemCount = Math.round(message.itemCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaginationResponse>, I>>(base?: I): PaginationResponse {
    return PaginationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaginationResponse>, I>>(object: I): PaginationResponse {
    const message = createBasePaginationResponse();
    message.page = object.page ?? 0;
    message.limit = object.limit ?? 0;
    message.totalItems = object.totalItems ?? 0;
    message.totalPages = object.totalPages ?? 0;
    message.itemCount = object.itemCount ?? 0;
    return message;
  },
};

function createBaseSort(): Sort {
  return { field: "", order: 0 };
}

export const Sort: MessageFns<Sort> = {
  encode(message: Sort, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.order !== 0) {
      writer.uint32(16).int32(message.order);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Sort {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.order = reader.int32() as any;
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

  fromJSON(object: any): Sort {
    return {
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      order: isSet(object.order) ? sortOrderFromJSON(object.order) : 0,
    };
  },

  toJSON(message: Sort): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.order !== 0) {
      obj.order = sortOrderToJSON(message.order);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Sort>, I>>(base?: I): Sort {
    return Sort.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Sort>, I>>(object: I): Sort {
    const message = createBaseSort();
    message.field = object.field ?? "";
    message.order = object.order ?? 0;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { field: "", operator: 0, value: undefined };
}

export const Filter: MessageFns<Filter> = {
  encode(message: Filter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Filter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.operator = reader.int32() as any;
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.value = Any.decode(reader, reader.uint32());
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

  fromJSON(object: any): Filter {
    return {
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      operator: isSet(object.operator) ? filterOperatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.operator !== 0) {
      obj.operator = filterOperatorToJSON(message.operator);
    }
    if (message.value !== undefined) {
      obj.value = Any.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Filter>, I>>(base?: I): Filter {
    return Filter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.field = object.field ?? "";
    message.operator = object.operator ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Any.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseCreateSuccess(): CreateSuccess {
  return { success: false };
}

export const CreateSuccess: MessageFns<CreateSuccess> = {
  encode(message: CreateSuccess, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
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

  fromJSON(object: any): CreateSuccess {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: CreateSuccess): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSuccess>, I>>(base?: I): CreateSuccess {
    return CreateSuccess.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateSuccess>, I>>(object: I): CreateSuccess {
    const message = createBaseCreateSuccess();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseUpdateSuccess(): UpdateSuccess {
  return { success: false };
}

export const UpdateSuccess: MessageFns<UpdateSuccess> = {
  encode(message: UpdateSuccess, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateSuccess();
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

  fromJSON(object: any): UpdateSuccess {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: UpdateSuccess): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSuccess>, I>>(base?: I): UpdateSuccess {
    return UpdateSuccess.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateSuccess>, I>>(object: I): UpdateSuccess {
    const message = createBaseUpdateSuccess();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseDeleteSuccess(): DeleteSuccess {
  return { success: false };
}

export const DeleteSuccess: MessageFns<DeleteSuccess> = {
  encode(message: DeleteSuccess, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteSuccess();
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

  fromJSON(object: any): DeleteSuccess {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: DeleteSuccess): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSuccess>, I>>(base?: I): DeleteSuccess {
    return DeleteSuccess.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteSuccess>, I>>(object: I): DeleteSuccess {
    const message = createBaseDeleteSuccess();
    message.success = object.success ?? false;
    return message;
  },
};

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
