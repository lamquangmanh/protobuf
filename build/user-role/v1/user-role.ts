// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.7.0
//   protoc               v5.29.3
// source: user-role/v1/user-role.proto

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

export const protobufPackage = "user_role.v1";

export interface UserRole {
  userId: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
}

export interface GetUserRoleRequest {
  userId: string;
}

export interface GetUserRolesRequest {
  pagination: PaginationRequest | undefined;
  sort: Sort[];
  filter: Filter[];
}

export interface GetUserRolesResponse {
  pagination: PaginationResponse | undefined;
  data: UserRole[];
}

function createBaseUserRole(): UserRole {
  return { userId: "", username: "", email: "", password: "", phone: "", avatar: "" };
}

export const UserRole: MessageFns<UserRole> = {
  encode(message: UserRole, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.phone !== "") {
      writer.uint32(42).string(message.phone);
    }
    if (message.avatar !== "") {
      writer.uint32(50).string(message.avatar);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserRole {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRole();
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

          message.password = reader.string();
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

          message.avatar = reader.string();
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

  fromJSON(object: any): UserRole {
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      phone: isSet(object.phone) ? globalThis.String(object.phone) : "",
      avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
    };
  },

  toJSON(message: UserRole): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
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
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRole>, I>>(base?: I): UserRole {
    return UserRole.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserRole>, I>>(object: I): UserRole {
    const message = createBaseUserRole();
    message.userId = object.userId ?? "";
    message.username = object.username ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.phone = object.phone ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseGetUserRoleRequest(): GetUserRoleRequest {
  return { userId: "" };
}

export const GetUserRoleRequest: MessageFns<GetUserRoleRequest> = {
  encode(message: GetUserRoleRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserRoleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRoleRequest();
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

  fromJSON(object: any): GetUserRoleRequest {
    return { userId: isSet(object.userId) ? globalThis.String(object.userId) : "" };
  },

  toJSON(message: GetUserRoleRequest): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRoleRequest>, I>>(base?: I): GetUserRoleRequest {
    return GetUserRoleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRoleRequest>, I>>(object: I): GetUserRoleRequest {
    const message = createBaseGetUserRoleRequest();
    message.userId = object.userId ?? "";
    return message;
  },
};

function createBaseGetUserRolesRequest(): GetUserRolesRequest {
  return { pagination: undefined, sort: [], filter: [] };
}

export const GetUserRolesRequest: MessageFns<GetUserRolesRequest> = {
  encode(message: GetUserRolesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserRolesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRolesRequest();
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

  fromJSON(object: any): GetUserRolesRequest {
    return {
      pagination: isSet(object.pagination) ? PaginationRequest.fromJSON(object.pagination) : undefined,
      sort: globalThis.Array.isArray(object?.sort) ? object.sort.map((e: any) => Sort.fromJSON(e)) : [],
      filter: globalThis.Array.isArray(object?.filter) ? object.filter.map((e: any) => Filter.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetUserRolesRequest): unknown {
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

  create<I extends Exact<DeepPartial<GetUserRolesRequest>, I>>(base?: I): GetUserRolesRequest {
    return GetUserRolesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRolesRequest>, I>>(object: I): GetUserRolesRequest {
    const message = createBaseGetUserRolesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationRequest.fromPartial(object.pagination)
      : undefined;
    message.sort = object.sort?.map((e) => Sort.fromPartial(e)) || [];
    message.filter = object.filter?.map((e) => Filter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetUserRolesResponse(): GetUserRolesResponse {
  return { pagination: undefined, data: [] };
}

export const GetUserRolesResponse: MessageFns<GetUserRolesResponse> = {
  encode(message: GetUserRolesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pagination !== undefined) {
      PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
    }
    for (const v of message.data) {
      UserRole.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRolesResponse();
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

          message.data.push(UserRole.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetUserRolesResponse {
    return {
      pagination: isSet(object.pagination) ? PaginationResponse.fromJSON(object.pagination) : undefined,
      data: globalThis.Array.isArray(object?.data) ? object.data.map((e: any) => UserRole.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetUserRolesResponse): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PaginationResponse.toJSON(message.pagination);
    }
    if (message.data?.length) {
      obj.data = message.data.map((e) => UserRole.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRolesResponse>, I>>(base?: I): GetUserRolesResponse {
    return GetUserRolesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRolesResponse>, I>>(object: I): GetUserRolesResponse {
    const message = createBaseGetUserRolesResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PaginationResponse.fromPartial(object.pagination)
      : undefined;
    message.data = object.data?.map((e) => UserRole.fromPartial(e)) || [];
    return message;
  },
};

export interface UserRoleService {
  GetUserRole(request: GetUserRoleRequest): Promise<UserRole>;
  GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesRequest>;
  CreateUserRole(request: UserRole): Promise<CreateSuccess>;
  UpdateUserRole(request: UserRole): Promise<UpdateSuccess>;
  DeleteUserRole(request: GetUserRoleRequest): Promise<DeleteSuccess>;
}

export const UserRoleServiceServiceName = "user_role.v1.UserRoleService";
export class UserRoleServiceClientImpl implements UserRoleService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || UserRoleServiceServiceName;
    this.rpc = rpc;
    this.GetUserRole = this.GetUserRole.bind(this);
    this.GetUserRoles = this.GetUserRoles.bind(this);
    this.CreateUserRole = this.CreateUserRole.bind(this);
    this.UpdateUserRole = this.UpdateUserRole.bind(this);
    this.DeleteUserRole = this.DeleteUserRole.bind(this);
  }
  GetUserRole(request: GetUserRoleRequest): Promise<UserRole> {
    const data = GetUserRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserRole", data);
    return promise.then((data) => UserRole.decode(new BinaryReader(data)));
  }

  GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesRequest> {
    const data = GetUserRolesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUserRoles", data);
    return promise.then((data) => GetUserRolesRequest.decode(new BinaryReader(data)));
  }

  CreateUserRole(request: UserRole): Promise<CreateSuccess> {
    const data = UserRole.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateUserRole", data);
    return promise.then((data) => CreateSuccess.decode(new BinaryReader(data)));
  }

  UpdateUserRole(request: UserRole): Promise<UpdateSuccess> {
    const data = UserRole.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateUserRole", data);
    return promise.then((data) => UpdateSuccess.decode(new BinaryReader(data)));
  }

  DeleteUserRole(request: GetUserRoleRequest): Promise<DeleteSuccess> {
    const data = GetUserRoleRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteUserRole", data);
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
