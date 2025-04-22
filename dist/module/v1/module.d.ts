import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CreateSuccess, DeleteSuccess, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "module.v1";
export interface Module {
    moduleId: string;
    name: string;
    description: string;
}
export interface CreateModuleData {
    name: string;
    description: string;
}
export interface GetModuleRequest {
    moduleId: string;
}
export interface GetModulesRequest {
    pagination: PaginationRequest | undefined;
    sort: Sort[];
    filter: Filter[];
}
export interface GetModulesResponse {
    pagination: PaginationResponse | undefined;
    data: Module[];
}
export interface CreateModuleRequest {
    module: CreateModuleData | undefined;
    userId: string;
}
export interface UpdateModuleRequest {
    module: Module | undefined;
    userId: string;
}
export interface DeleteModuleRequest {
    moduleId: string;
    userId: string;
}
export declare const Module: MessageFns<Module>;
export declare const CreateModuleData: MessageFns<CreateModuleData>;
export declare const GetModuleRequest: MessageFns<GetModuleRequest>;
export declare const GetModulesRequest: MessageFns<GetModulesRequest>;
export declare const GetModulesResponse: MessageFns<GetModulesResponse>;
export declare const CreateModuleRequest: MessageFns<CreateModuleRequest>;
export declare const UpdateModuleRequest: MessageFns<UpdateModuleRequest>;
export declare const DeleteModuleRequest: MessageFns<DeleteModuleRequest>;
export interface ModuleService {
    GetModule(request: GetModuleRequest): Promise<Module>;
    GetModules(request: GetModulesRequest): Promise<GetModulesResponse>;
    CreateModule(request: CreateModuleRequest): Promise<CreateSuccess>;
    UpdateModule(request: UpdateModuleRequest): Promise<UpdateSuccess>;
    DeleteModule(request: DeleteModuleRequest): Promise<DeleteSuccess>;
}
export declare const ModuleServiceServiceName = "module.v1.ModuleService";
export declare class ModuleServiceClientImpl implements ModuleService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetModule(request: GetModuleRequest): Promise<Module>;
    GetModules(request: GetModulesRequest): Promise<GetModulesResponse>;
    CreateModule(request: CreateModuleRequest): Promise<CreateSuccess>;
    UpdateModule(request: UpdateModuleRequest): Promise<UpdateSuccess>;
    DeleteModule(request: DeleteModuleRequest): Promise<DeleteSuccess>;
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
