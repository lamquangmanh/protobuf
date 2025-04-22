import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Any } from "../../google/protobuf/any";
export declare const protobufPackage = "base.v1";
/** define enum */
export declare enum FilterOperator {
    EQUAL = 0,
    NOT_EQUAL = 1,
    GREATER_THAN = 2,
    LESS_THAN = 3,
    GREATER_THAN_OR_EQUAL = 4,
    LESS_THAN_OR_EQUAL = 5,
    LIKE = 6,
    IN = 7,
    NOT_IN = 8,
    UNRECOGNIZED = -1
}
export declare function filterOperatorFromJSON(object: any): FilterOperator;
export declare function filterOperatorToJSON(object: FilterOperator): string;
export declare enum SortOrder {
    UNSPECIFIED = 0,
    ASC = 1,
    DESC = 2,
    UNRECOGNIZED = -1
}
export declare function sortOrderFromJSON(object: any): SortOrder;
export declare function sortOrderToJSON(object: SortOrder): string;
/** define message */
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
    /** created_at, updated_at */
    field: string;
    /** "ASC" or "DESC" */
    order: SortOrder;
}
export interface Filter {
    field: string;
    /** "eq", "ne", "gt", "lt", "gte", "lte", "like", "in", "nin" */
    operator: FilterOperator;
    value: Any | undefined;
}
export interface ErrorResponse {
    code: number;
    message: string;
    /** dynamic key-value object */
    extra: {
        [key: string]: any;
    } | undefined;
}
export interface CreateSuccess {
    success?: boolean | undefined;
    error?: ErrorResponse | undefined;
}
export interface UpdateSuccess {
    success?: boolean | undefined;
    error?: ErrorResponse | undefined;
}
export interface DeleteSuccess {
    success?: boolean | undefined;
    error?: ErrorResponse | undefined;
}
export declare const PaginationRequest: MessageFns<PaginationRequest>;
export declare const PaginationResponse: MessageFns<PaginationResponse>;
export declare const Sort: MessageFns<Sort>;
export declare const Filter: MessageFns<Filter>;
export declare const ErrorResponse: MessageFns<ErrorResponse>;
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
