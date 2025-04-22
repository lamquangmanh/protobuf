import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CreateSuccess, DeleteSuccess, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "user.v1";
export declare enum UserStatus {
    ACTIVE = 0,
    DEACTIVATED = 1,
    DELETED = 2,
    UNRECOGNIZED = -1
}
export declare function userStatusFromJSON(object: any): UserStatus;
export declare function userStatusToJSON(object: UserStatus): string;
export interface User {
    userId: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
    status: UserStatus;
}
export interface GetUserRequest {
    userId: string;
}
export interface GetUsersRequest {
    pagination: PaginationRequest | undefined;
    sort: Sort[];
    filter: Filter[];
}
export interface GetUsersResponse {
    pagination: PaginationResponse | undefined;
    data: User[];
}
export interface CreateUserRequest {
    user: User | undefined;
    userId: string;
}
export interface UpdateUserRequest {
    user: User | undefined;
    userId: string;
}
export interface DeleteUserRequest {
    userId: string;
    deletedUserId: string;
}
export declare const User: MessageFns<User>;
export declare const GetUserRequest: MessageFns<GetUserRequest>;
export declare const GetUsersRequest: MessageFns<GetUsersRequest>;
export declare const GetUsersResponse: MessageFns<GetUsersResponse>;
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const UpdateUserRequest: MessageFns<UpdateUserRequest>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export interface UserService {
    GetUser(request: GetUserRequest): Promise<User>;
    GetUsers(request: GetUsersRequest): Promise<GetUsersResponse>;
    CreateUser(request: CreateUserRequest): Promise<CreateSuccess>;
    UpdateUser(request: UpdateUserRequest): Promise<UpdateSuccess>;
    DeleteUser(request: DeleteUserRequest): Promise<DeleteSuccess>;
}
export declare const UserServiceServiceName = "user.v1.UserService";
export declare class UserServiceClientImpl implements UserService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetUser(request: GetUserRequest): Promise<User>;
    GetUsers(request: GetUsersRequest): Promise<GetUsersResponse>;
    CreateUser(request: CreateUserRequest): Promise<CreateSuccess>;
    UpdateUser(request: UpdateUserRequest): Promise<UpdateSuccess>;
    DeleteUser(request: DeleteUserRequest): Promise<DeleteSuccess>;
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
