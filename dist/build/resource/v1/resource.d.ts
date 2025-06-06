import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { ActionRequestType } from "../../action/v1/action";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "resource.v1";
export interface Resource {
    resourceId: string;
    name: string;
    moduleId: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    createdAt: string;
}
export interface Action {
    name: string;
    description: string;
    requestType: ActionRequestType;
    url: string;
    method: string;
    actionId?: string | undefined;
}
export interface CreateResourceData {
    name: string;
    moduleId: string;
    actions: Action[];
}
export interface UpdateResourceData {
    resourceId: string;
    name: string;
    moduleId: string;
    actions: Action[];
}
export interface GetResourceRequest {
    resourceId: string;
}
export interface GetResourcesRequest {
    pagination: PaginationRequest | undefined;
    sort: Sort[];
    filter: Filter[];
}
export interface GetResourcesResponse {
    pagination: PaginationResponse | undefined;
    data: Resource[];
}
export interface CreateResourceRequest {
    resource: CreateResourceData | undefined;
    userId: string;
}
export interface UpdateResourceRequest {
    resource: UpdateResourceData | undefined;
    userId: string;
}
export interface DeleteResourceRequest {
    resourceId: string;
    userId: string;
}
export interface CreateSuccess {
    resource?: Resource | undefined;
    error?: ErrorResponse | undefined;
}
export declare const Resource: MessageFns<Resource>;
export declare const Action: MessageFns<Action>;
export declare const CreateResourceData: MessageFns<CreateResourceData>;
export declare const UpdateResourceData: MessageFns<UpdateResourceData>;
export declare const GetResourceRequest: MessageFns<GetResourceRequest>;
export declare const GetResourcesRequest: MessageFns<GetResourcesRequest>;
export declare const GetResourcesResponse: MessageFns<GetResourcesResponse>;
export declare const CreateResourceRequest: MessageFns<CreateResourceRequest>;
export declare const UpdateResourceRequest: MessageFns<UpdateResourceRequest>;
export declare const DeleteResourceRequest: MessageFns<DeleteResourceRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface ResourceService {
    GetResource(request: GetResourceRequest): Promise<Resource>;
    GetResources(request: GetResourcesRequest): Promise<GetResourcesResponse>;
    CreateResource(request: CreateResourceRequest): Promise<CreateSuccess>;
    UpdateResource(request: UpdateResourceRequest): Promise<UpdateSuccess>;
    DeleteResource(request: DeleteResourceRequest): Promise<DeleteSuccess>;
}
export declare const ResourceServiceServiceName = "resource.v1.ResourceService";
export declare class ResourceServiceClientImpl implements ResourceService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetResource(request: GetResourceRequest): Promise<Resource>;
    GetResources(request: GetResourcesRequest): Promise<GetResourcesResponse>;
    CreateResource(request: CreateResourceRequest): Promise<CreateSuccess>;
    UpdateResource(request: UpdateResourceRequest): Promise<UpdateSuccess>;
    DeleteResource(request: DeleteResourceRequest): Promise<DeleteSuccess>;
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
