import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "auth.v1";
export interface LoginRequest {
    email: string;
    password: string;
}
export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}
export interface GetMeRequest {
    userId: string;
}
export interface GetMeResponse {
    userId: string;
    email: string;
    username: string;
    avatar?: string | undefined;
    phone?: string | undefined;
    status: string;
}
export interface VerifyRequest {
    token: string;
    requestType: string;
    method: string;
    url: string;
}
export interface VerifyResponse {
    success: boolean;
}
export declare const LoginRequest: MessageFns<LoginRequest>;
export declare const LoginResponse: MessageFns<LoginResponse>;
export declare const GetMeRequest: MessageFns<GetMeRequest>;
export declare const GetMeResponse: MessageFns<GetMeResponse>;
export declare const VerifyRequest: MessageFns<VerifyRequest>;
export declare const VerifyResponse: MessageFns<VerifyResponse>;
export interface AuthService {
    Login(request: LoginRequest): Promise<LoginResponse>;
    GetMe(request: GetMeRequest): Promise<GetMeResponse>;
    Verify(request: VerifyRequest): Promise<VerifyResponse>;
}
export declare const AuthServiceServiceName = "auth.v1.AuthService";
export declare class AuthServiceClientImpl implements AuthService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Login(request: LoginRequest): Promise<LoginResponse>;
    GetMe(request: GetMeRequest): Promise<GetMeResponse>;
    Verify(request: VerifyRequest): Promise<VerifyResponse>;
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
