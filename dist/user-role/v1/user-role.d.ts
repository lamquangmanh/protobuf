import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "user_role.v1";
export interface UserRole {
    userRoleId: string;
    userId: string;
    roleId: string;
}
export interface CreateUserRoleData {
    userId: string;
    roleId: string;
}
export interface GetUserRoleRequest {
    userRoleId: string;
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
export interface CreateUserRoleRequest {
    userRole: CreateUserRoleData | undefined;
    userId: string;
}
export interface UpdateUserRoleRequest {
    userRole: UserRole | undefined;
    userId: string;
}
export interface DeleteUserRoleRequest {
    userRoleId: string;
    userId: string;
}
export interface CreateSuccess {
    userRole?: UserRole | undefined;
    error?: ErrorResponse | undefined;
}
export declare const UserRole: MessageFns<UserRole>;
export declare const CreateUserRoleData: MessageFns<CreateUserRoleData>;
export declare const GetUserRoleRequest: MessageFns<GetUserRoleRequest>;
export declare const GetUserRolesRequest: MessageFns<GetUserRolesRequest>;
export declare const GetUserRolesResponse: MessageFns<GetUserRolesResponse>;
export declare const CreateUserRoleRequest: MessageFns<CreateUserRoleRequest>;
export declare const UpdateUserRoleRequest: MessageFns<UpdateUserRoleRequest>;
export declare const DeleteUserRoleRequest: MessageFns<DeleteUserRoleRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface UserRoleService {
    GetUserRole(request: GetUserRoleRequest): Promise<UserRole>;
    GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesRequest>;
    CreateUserRole(request: CreateUserRoleRequest): Promise<CreateSuccess>;
    UpdateUserRole(request: UpdateUserRoleRequest): Promise<UpdateSuccess>;
    DeleteUserRole(request: DeleteUserRoleRequest): Promise<DeleteSuccess>;
}
export declare const UserRoleServiceServiceName = "user_role.v1.UserRoleService";
export declare class UserRoleServiceClientImpl implements UserRoleService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetUserRole(request: GetUserRoleRequest): Promise<UserRole>;
    GetUserRoles(request: GetUserRolesRequest): Promise<GetUserRolesRequest>;
    CreateUserRole(request: CreateUserRoleRequest): Promise<CreateSuccess>;
    UpdateUserRole(request: UpdateUserRoleRequest): Promise<UpdateSuccess>;
    DeleteUserRole(request: DeleteUserRoleRequest): Promise<DeleteSuccess>;
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
