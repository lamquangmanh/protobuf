import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "permission.v1";
export interface Permission {
    permissionId: string;
    roleId: string;
    resourceId: string;
    actionId: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    createdAt: string;
}
export interface CreatePermissionData {
    roleId: string;
    resourceId: string;
    actionId: string;
}
export interface GetPermissionRequest {
    permissionId: string;
}
export interface GetPermissionsRequest {
    pagination: PaginationRequest | undefined;
    sort: Sort[];
    filter: Filter[];
}
export interface GetPermissionsResponse {
    pagination: PaginationResponse | undefined;
    data: Permission[];
}
export interface CreatePermissionRequest {
    permission: CreatePermissionData | undefined;
    userId: string;
}
export interface UpdatePermissionRequest {
    permission: Permission | undefined;
    userId: string;
}
export interface DeletePermissionRequest {
    permissionId: string;
    userId: string;
}
export interface CreateSuccess {
    permission?: Permission | undefined;
    error?: ErrorResponse | undefined;
}
export declare const Permission: MessageFns<Permission>;
export declare const CreatePermissionData: MessageFns<CreatePermissionData>;
export declare const GetPermissionRequest: MessageFns<GetPermissionRequest>;
export declare const GetPermissionsRequest: MessageFns<GetPermissionsRequest>;
export declare const GetPermissionsResponse: MessageFns<GetPermissionsResponse>;
export declare const CreatePermissionRequest: MessageFns<CreatePermissionRequest>;
export declare const UpdatePermissionRequest: MessageFns<UpdatePermissionRequest>;
export declare const DeletePermissionRequest: MessageFns<DeletePermissionRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface PermissionService {
    GetPermission(request: GetPermissionRequest): Promise<Permission>;
    GetPermissions(request: GetPermissionsRequest): Promise<GetPermissionsResponse>;
    CreatePermission(request: CreatePermissionRequest): Promise<CreateSuccess>;
    UpdatePermission(request: UpdatePermissionRequest): Promise<UpdateSuccess>;
    DeletePermission(request: DeletePermissionRequest): Promise<DeleteSuccess>;
}
export declare const PermissionServiceServiceName = "permission.v1.PermissionService";
export declare class PermissionServiceClientImpl implements PermissionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetPermission(request: GetPermissionRequest): Promise<Permission>;
    GetPermissions(request: GetPermissionsRequest): Promise<GetPermissionsResponse>;
    CreatePermission(request: CreatePermissionRequest): Promise<CreateSuccess>;
    UpdatePermission(request: UpdatePermissionRequest): Promise<UpdateSuccess>;
    DeletePermission(request: DeletePermissionRequest): Promise<DeleteSuccess>;
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
