import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "menu.v1";
export interface SubMenu {
    name: string;
    url: string;
}
export interface Menu {
    name: string;
    url: string;
    icon?: string | undefined;
    subMenus: SubMenu[];
}
export interface SuperMenu {
    name: string;
    url: string;
    description: string;
    icon?: string | undefined;
    menus: Menu[];
}
export interface GetSuperMenuRequest {
    userId: string;
}
export interface GetSuperMenuResponse {
    superMenus: SuperMenu[];
}
export declare const SubMenu: MessageFns<SubMenu>;
export declare const Menu: MessageFns<Menu>;
export declare const SuperMenu: MessageFns<SuperMenu>;
export declare const GetSuperMenuRequest: MessageFns<GetSuperMenuRequest>;
export declare const GetSuperMenuResponse: MessageFns<GetSuperMenuResponse>;
export interface MenuService {
    GetSuperMenus(request: GetSuperMenuRequest): Promise<GetSuperMenuResponse>;
}
export declare const MenuServiceServiceName = "menu.v1.MenuService";
export declare class MenuServiceClientImpl implements MenuService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetSuperMenus(request: GetSuperMenuRequest): Promise<GetSuperMenuResponse>;
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
