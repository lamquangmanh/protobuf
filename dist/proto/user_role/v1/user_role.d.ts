import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ErrorMessage, Filter, PaginationRequest, PaginationResponse, Sort } from "../../base/v1/base";
export declare const protobufPackage = "proto.user_role.v1";
export interface UserRole {
    userRoleId: string;
    userId: string;
    roleId: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    createdAt: string;
}
export interface CreateUserRoleData {
    userId: string;
    roleId: string;
}
export interface UpdateUserRoleData {
    userId: string;
    roleId: string;
}
export interface GetUserRoleRequest {
    userRoleId: string;
}
export interface GetUserRolesRequest {
    pagination: PaginationRequest | undefined;
    sorts: Sort[];
    filters: Filter[];
}
export interface GetUserRolesResponse {
    pagination: PaginationResponse | undefined;
    data: UserRole[];
}
export interface GetUserRoleResponse {
    userRole: UserRole | undefined;
    errors: ErrorMessage[];
}
export interface CreateUserRoleRequest {
    userRole: CreateUserRoleData | undefined;
    userId: string;
}
export interface UpdateUserRoleRequest {
    userRole: UpdateUserRoleData | undefined;
    userId: string;
}
export interface DeleteUserRoleRequest {
    userRoleId: string;
    userId: string;
}
export interface CreateUserRoleResponse {
    userRole: UserRole | undefined;
    errors: ErrorMessage[];
}
export interface UpdateUserRoleResponse {
    success: boolean;
    errors: ErrorMessage[];
}
export interface DeleteUserRoleResponse {
    success: boolean;
    errors: ErrorMessage[];
}
export declare const UserRole: MessageFns<UserRole>;
export declare const CreateUserRoleData: MessageFns<CreateUserRoleData>;
export declare const UpdateUserRoleData: MessageFns<UpdateUserRoleData>;
export declare const GetUserRoleRequest: MessageFns<GetUserRoleRequest>;
export declare const GetUserRolesRequest: MessageFns<GetUserRolesRequest>;
export declare const GetUserRolesResponse: MessageFns<GetUserRolesResponse>;
export declare const GetUserRoleResponse: MessageFns<GetUserRoleResponse>;
export declare const CreateUserRoleRequest: MessageFns<CreateUserRoleRequest>;
export declare const UpdateUserRoleRequest: MessageFns<UpdateUserRoleRequest>;
export declare const DeleteUserRoleRequest: MessageFns<DeleteUserRoleRequest>;
export declare const CreateUserRoleResponse: MessageFns<CreateUserRoleResponse>;
export declare const UpdateUserRoleResponse: MessageFns<UpdateUserRoleResponse>;
export declare const DeleteUserRoleResponse: MessageFns<DeleteUserRoleResponse>;
export interface UserRoleService {
    GetUserRole(request: GetUserRoleRequest): Promise<GetUserRoleResponse>;
    GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesResponse>;
    CreateUserRole(request: CreateUserRoleRequest): Promise<CreateUserRoleResponse>;
    UpdateUserRole(request: UpdateUserRoleRequest): Promise<UpdateUserRoleResponse>;
    DeleteUserRole(request: DeleteUserRoleRequest): Promise<DeleteUserRoleResponse>;
}
export declare const UserRoleServiceServiceName = "proto.user_role.v1.UserRoleService";
export declare class UserRoleServiceClientImpl implements UserRoleService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetUserRole(request: GetUserRoleRequest): Promise<GetUserRoleResponse>;
    GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesResponse>;
    CreateUserRole(request: CreateUserRoleRequest): Promise<CreateUserRoleResponse>;
    UpdateUserRole(request: UpdateUserRoleRequest): Promise<UpdateUserRoleResponse>;
    DeleteUserRole(request: DeleteUserRoleRequest): Promise<DeleteUserRoleResponse>;
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
