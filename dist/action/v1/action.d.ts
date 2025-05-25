import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "action.v1";
export declare enum ActionRequestType {
    VIEW = 0,
    HTTP = 1,
    GRAPHQL = 2,
    GRPC = 3,
    WEBSOCKET = 4,
    UNRECOGNIZED = -1
}
export declare function actionRequestTypeFromJSON(object: any): ActionRequestType;
export declare function actionRequestTypeToJSON(object: ActionRequestType): string;
export interface Action {
    actionId: string;
    resourceId: string;
    name: string;
    description: string;
    requestType: ActionRequestType;
    url: string;
    method: string;
    createdAt: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
}
export interface CreateActionData {
    resourceId: string;
    name: string;
    description: string;
    requestType: ActionRequestType;
    url: string;
    method: string;
}
export interface UpdateActionData {
    actionId: string;
    resourceId: string;
    name: string;
    description: string;
    requestType: ActionRequestType;
    url: string;
    method: string;
}
export interface GetActionRequest {
    actionId: string;
}
export interface GetActionsRequest {
    pagination: PaginationRequest | undefined;
    sorts: Sort[];
    filters: Filter[];
}
export interface GetActionsResponse {
    pagination: PaginationResponse | undefined;
    data: Action[];
}
export interface CreateActionRequest {
    action: CreateActionData | undefined;
    userId: string;
}
export interface UpdateActionRequest {
    action: UpdateActionData | undefined;
    userId: string;
}
export interface DeleteActionRequest {
    actionId: string;
    userId: string;
}
export interface CreateSuccess {
    action?: Action | undefined;
    error?: ErrorResponse | undefined;
}
export declare const Action: MessageFns<Action>;
export declare const CreateActionData: MessageFns<CreateActionData>;
export declare const UpdateActionData: MessageFns<UpdateActionData>;
export declare const GetActionRequest: MessageFns<GetActionRequest>;
export declare const GetActionsRequest: MessageFns<GetActionsRequest>;
export declare const GetActionsResponse: MessageFns<GetActionsResponse>;
export declare const CreateActionRequest: MessageFns<CreateActionRequest>;
export declare const UpdateActionRequest: MessageFns<UpdateActionRequest>;
export declare const DeleteActionRequest: MessageFns<DeleteActionRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface ActionService {
    GetAction(request: GetActionRequest): Promise<Action>;
    GetActions(request: GetActionsRequest): Promise<GetActionsResponse>;
    CreateAction(request: CreateActionRequest): Promise<CreateSuccess>;
    UpdateAction(request: UpdateActionRequest): Promise<UpdateSuccess>;
    DeleteAction(request: DeleteActionRequest): Promise<DeleteSuccess>;
}
export declare const ActionServiceServiceName = "action.v1.ActionService";
export declare class ActionServiceClientImpl implements ActionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetAction(request: GetActionRequest): Promise<Action>;
    GetActions(request: GetActionsRequest): Promise<GetActionsResponse>;
    CreateAction(request: CreateActionRequest): Promise<CreateSuccess>;
    UpdateAction(request: UpdateActionRequest): Promise<UpdateSuccess>;
    DeleteAction(request: DeleteActionRequest): Promise<DeleteSuccess>;
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
