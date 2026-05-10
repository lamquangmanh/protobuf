import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ErrorMessage, Filter, PaginationRequest, PaginationResponse, Sort } from "../../base/v1/base";
export declare const protobufPackage = "proto.user.v1";
export declare enum UserStatus {
    USER_STATUS_UNSPECIFIED = 0,
    USER_STATUS_ACTIVE = 1,
    USER_STATUS_DEACTIVATED = 2,
    USER_STATUS_DELETED = 3,
    UNRECOGNIZED = -1
}
export declare function userStatusFromJSON(object: any): UserStatus;
export declare function userStatusToJSON(object: UserStatus): string;
export interface User {
    userId: string;
    username: string;
    email: string;
    phone: string;
    avatar: string;
    status: UserStatus;
    createdAt: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    roleIds: string[];
}
export interface CreateUserData {
    username: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
    status: UserStatus;
    roleIds: string[];
}
export interface UpdateUserData {
    username: string;
    email: string;
    phone: string;
    avatar: string;
    status: UserStatus;
    roleIds: string[];
    userId: string;
}
export interface GetUserRequest {
    userId: string;
}
export interface GetUsersRequest {
    pagination: PaginationRequest | undefined;
    sorts: Sort[];
    filters: Filter[];
}
export interface GetUsersResponse {
    pagination: PaginationResponse | undefined;
    data: User[];
}
export interface CreateUserRequest {
    user: CreateUserData | undefined;
    userId: string;
}
export interface UpdateUserRequest {
    user: UpdateUserData | undefined;
    userId: string;
}
export interface DeleteUserRequest {
    userId: string;
    deletedUserId: string;
}
export interface CreateUserResponse {
    user: User | undefined;
    errors: ErrorMessage[];
}
export interface UpdateUserResponse {
    success: boolean;
    errors: ErrorMessage[];
}
export interface DeleteUserResponse {
    success: boolean;
    errors: ErrorMessage[];
}
export interface ChangePasswordResponse {
    success: boolean;
    errors: ErrorMessage[];
}
export interface GetUserResponse {
    user: User | undefined;
    errors: ErrorMessage[];
}
export interface ChangePasswordRequest {
    userId: string;
    password: string;
}
export declare const User: MessageFns<User>;
export declare const CreateUserData: MessageFns<CreateUserData>;
export declare const UpdateUserData: MessageFns<UpdateUserData>;
export declare const GetUserRequest: MessageFns<GetUserRequest>;
export declare const GetUsersRequest: MessageFns<GetUsersRequest>;
export declare const GetUsersResponse: MessageFns<GetUsersResponse>;
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const UpdateUserRequest: MessageFns<UpdateUserRequest>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export declare const CreateUserResponse: MessageFns<CreateUserResponse>;
export declare const UpdateUserResponse: MessageFns<UpdateUserResponse>;
export declare const DeleteUserResponse: MessageFns<DeleteUserResponse>;
export declare const ChangePasswordResponse: MessageFns<ChangePasswordResponse>;
export declare const GetUserResponse: MessageFns<GetUserResponse>;
export declare const ChangePasswordRequest: MessageFns<ChangePasswordRequest>;
export interface UserService {
    GetUser(request: GetUserRequest): Promise<GetUserResponse>;
    GetUsers(request: GetUsersRequest): Promise<GetUsersResponse>;
    CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
    UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
    DeleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
    ChangePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse>;
}
export declare const UserServiceServiceName = "proto.user.v1.UserService";
export declare class UserServiceClientImpl implements UserService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetUser(request: GetUserRequest): Promise<GetUserResponse>;
    GetUsers(request: GetUsersRequest): Promise<GetUsersResponse>;
    CreateUser(request: CreateUserRequest): Promise<CreateUserResponse>;
    UpdateUser(request: UpdateUserRequest): Promise<UpdateUserResponse>;
    DeleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
    ChangePassword(request: ChangePasswordRequest): Promise<ChangePasswordResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
    fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
export {};
