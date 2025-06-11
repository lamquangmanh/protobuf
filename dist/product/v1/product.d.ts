import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DeleteSuccess, ErrorResponse, Filter, PaginationRequest, PaginationResponse, Sort, UpdateSuccess } from "../../base/v1/base";
export declare const protobufPackage = "product.v1";
export interface Product {
    productId: string;
    name: string;
    description: string;
    url: string;
    createdAt: string;
    createdUserId: string;
    updatedAt: string;
    updatedUserId: string;
    deletedAt: string;
    deletedUserId: string;
    icon?: string | undefined;
}
export interface CreateProductData {
    name: string;
    description: string;
    url: string;
    icon?: string | undefined;
}
export interface UpdateProductData {
    productId: string;
    name: string;
    description: string;
    url: string;
    icon?: string | undefined;
}
export interface GetProductRequest {
    productId: string;
}
export interface GetProductsRequest {
    pagination: PaginationRequest | undefined;
    sorts: Sort[];
    filters: Filter[];
}
export interface GetProductsResponse {
    pagination: PaginationResponse | undefined;
    data: Product[];
}
export interface CreateProductRequest {
    product: CreateProductData | undefined;
    userId: string;
}
export interface UpdateProductRequest {
    product: UpdateProductData | undefined;
    userId: string;
}
export interface DeleteProductRequest {
    productId: string;
    userId: string;
}
export interface CreateSuccess {
    product?: Product | undefined;
    error?: ErrorResponse | undefined;
}
export declare const Product: MessageFns<Product>;
export declare const CreateProductData: MessageFns<CreateProductData>;
export declare const UpdateProductData: MessageFns<UpdateProductData>;
export declare const GetProductRequest: MessageFns<GetProductRequest>;
export declare const GetProductsRequest: MessageFns<GetProductsRequest>;
export declare const GetProductsResponse: MessageFns<GetProductsResponse>;
export declare const CreateProductRequest: MessageFns<CreateProductRequest>;
export declare const UpdateProductRequest: MessageFns<UpdateProductRequest>;
export declare const DeleteProductRequest: MessageFns<DeleteProductRequest>;
export declare const CreateSuccess: MessageFns<CreateSuccess>;
export interface ProductService {
    GetProduct(request: GetProductRequest): Promise<Product>;
    GetProducts(request: GetProductsRequest): Promise<GetProductsResponse>;
    CreateProduct(request: CreateProductRequest): Promise<CreateSuccess>;
    UpdateProduct(request: UpdateProductRequest): Promise<UpdateSuccess>;
    DeleteProduct(request: DeleteProductRequest): Promise<DeleteSuccess>;
}
export declare const ProductServiceServiceName = "product.v1.ProductService";
export declare class ProductServiceClientImpl implements ProductService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetProduct(request: GetProductRequest): Promise<Product>;
    GetProducts(request: GetProductsRequest): Promise<GetProductsResponse>;
    CreateProduct(request: CreateProductRequest): Promise<CreateSuccess>;
    UpdateProduct(request: UpdateProductRequest): Promise<UpdateSuccess>;
    DeleteProduct(request: DeleteProductRequest): Promise<DeleteSuccess>;
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
