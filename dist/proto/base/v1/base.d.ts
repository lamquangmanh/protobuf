import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "proto.base.v1";
export declare enum FilterOperator {
    FILTER_OPERATOR_UNSPECIFIED = 0,
    FILTER_OPERATOR_EQUAL = 1,
    FILTER_OPERATOR_NOT_EQUAL = 2,
    FILTER_OPERATOR_GREATER_THAN = 3,
    FILTER_OPERATOR_LESS_THAN = 4,
    FILTER_OPERATOR_GREATER_THAN_OR_EQUAL = 5,
    FILTER_OPERATOR_LESS_THAN_OR_EQUAL = 6,
    FILTER_OPERATOR_LIKE = 7,
    FILTER_OPERATOR_IN = 8,
    FILTER_OPERATOR_NOT_IN = 9,
    UNRECOGNIZED = -1
}
export declare function filterOperatorFromJSON(object: any): FilterOperator;
export declare function filterOperatorToJSON(object: FilterOperator): string;
export declare enum SortOrder {
    SORT_ORDER_UNSPECIFIED = 0,
    SORT_ORDER_ASC = 1,
    SORT_ORDER_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function sortOrderFromJSON(object: any): SortOrder;
export declare function sortOrderToJSON(object: SortOrder): string;
export interface PaginationRequest {
    page: number;
    limit: number;
}
export interface PaginationResponse {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    itemCount: number;
}
export interface Sort {
    field: string;
    order: SortOrder;
}
export interface Filter {
    field: string;
    operator: FilterOperator;
    stringValue?: string | undefined;
    numberValue?: string | undefined;
    boolValue?: string | undefined;
    boolValues: string[];
    stringValues: string[];
    numberValues: string[];
}
export interface ErrorMessage {
    code: number;
    message: string;
    extra: {
        [key: string]: any;
    } | undefined;
}
export interface CreateSuccess {
    success: boolean;
    errors: ErrorMessage[];
}
export interface UpdateSuccess {
    success: boolean;
    errors: ErrorMessage[];
}
export interface DeleteSuccess {
    success: boolean;
    errors: ErrorMessage[];
}
export declare const PaginationRequest: MessageFns<PaginationRequest>;
export declare const PaginationResponse: MessageFns<PaginationResponse>;
export declare const Sort: MessageFns<Sort>;
export declare const Filter: MessageFns<Filter>;
export declare const ErrorMessage: MessageFns<ErrorMessage>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export declare const UpdateSuccess: MessageFns<UpdateSuccess>;
export declare const DeleteSuccess: MessageFns<DeleteSuccess>;
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
