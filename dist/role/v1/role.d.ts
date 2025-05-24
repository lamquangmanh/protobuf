import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "role.v1";
export interface Role {
    roleId: string;
    name: string;
    description: string;
    moduleId: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    createdAt: string;
}
export interface Permission {
    resourceId: string;
    actionId: string;
    permissionId?: string | undefined;
}
export interface CreateRoleData {
    name: string;
    description: string;
    moduleId: string;
    permissions: Permission[];
}
export interface UpdateRoleData {
    roleId: string;
    name: string;
    description: string;
    moduleId: string;
    permissions: Permission[];
}
export interface GetRoleRequest {
    roleId: string;
}
export interface GetRolesRequest {
    pagination: PaginationRequest | undefined;
    sorts: Sort[];
    filters: Filter[];
}
export interface GetRolesResponse {
    pagination: PaginationResponse | undefined;
    data: Role[];
}
export interface CreateRoleRequest {
    role: CreateRoleData | undefined;
    userId: string;
}
export interface UpdateRoleRequest {
    role: UpdateRoleData | undefined;
    userId: string;
}
export interface DeleteRoleRequest {
    roleId: string;
    userId: string;
}
export interface CreateSuccess {
    role?: Role | undefined;
    error?: ErrorResponse | undefined;
}
export declare const Role: MessageFns<Role>;
export declare const Permission: MessageFns<Permission>;
export declare const CreateRoleData: MessageFns<CreateRoleData>;
export declare const UpdateRoleData: MessageFns<UpdateRoleData>;
export declare const GetRoleRequest: MessageFns<GetRoleRequest>;
export declare const GetRolesRequest: MessageFns<GetRolesRequest>;
export declare const GetRolesResponse: MessageFns<GetRolesResponse>;
export declare const CreateRoleRequest: MessageFns<CreateRoleRequest>;
export declare const UpdateRoleRequest: MessageFns<UpdateRoleRequest>;
export declare const DeleteRoleRequest: MessageFns<DeleteRoleRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface RoleService {
    GetRole(request: GetRoleRequest): Promise<Role>;
    GetRoles(request: GetRolesRequest): Promise<GetRolesResponse>;
    CreateRole(request: CreateRoleRequest): Promise<CreateSuccess>;
    UpdateRole(request: UpdateRoleRequest): Promise<UpdateSuccess>;
    DeleteRole(request: DeleteRoleRequest): Promise<DeleteSuccess>;
}
export declare const RoleServiceServiceName = "role.v1.RoleService";
export declare class RoleServiceClientImpl implements RoleService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetRole(request: GetRoleRequest): Promise<Role>;
    GetRoles(request: GetRolesRequest): Promise<GetRolesResponse>;
    CreateRole(request: CreateRoleRequest): Promise<CreateSuccess>;
    UpdateRole(request: UpdateRoleRequest): Promise<UpdateSuccess>;
    DeleteRole(request: DeleteRoleRequest): Promise<DeleteSuccess>;
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
