"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceClientImpl = exports.ProductServiceServiceName = exports.CreateSuccess = exports.DeleteProductRequest = exports.UpdateProductRequest = exports.CreateProductRequest = exports.GetProductsResponse = exports.GetProductsRequest = exports.GetProductRequest = exports.UpdateProductData = exports.CreateProductData = exports.Product = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const base_1 = require("../../base/v1/base");
exports.protobufPackage = "product.v1";
function createBaseProduct() {
    return {
        productId: "",
        name: "",
        description: "",
        url: "",
        createdAt: "",
        createdUserId: "",
        updatedAt: "",
        updatedUserId: "",
        deletedAt: "",
        deletedUserId: "",
        icon: undefined,
    };
}
exports.Product = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.createdAt !== "") {
            writer.uint32(42).string(message.createdAt);
        }
        if (message.createdUserId !== "") {
            writer.uint32(50).string(message.createdUserId);
        }
        if (message.updatedAt !== "") {
            writer.uint32(58).string(message.updatedAt);
        }
        if (message.updatedUserId !== "") {
            writer.uint32(66).string(message.updatedUserId);
        }
        if (message.deletedAt !== "") {
            writer.uint32(74).string(message.deletedAt);
        }
        if (message.deletedUserId !== "") {
            writer.uint32(82).string(message.deletedUserId);
        }
        if (message.icon !== undefined) {
            writer.uint32(90).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProduct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.createdAt = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.createdUserId = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.updatedAt = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.updatedUserId = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.deletedAt = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.deletedUserId = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            createdAt: isSet(object.createdAt) ? globalThis.String(object.createdAt) : "",
            createdUserId: isSet(object.createdUserId) ? globalThis.String(object.createdUserId) : "",
            updatedAt: isSet(object.updatedAt) ? globalThis.String(object.updatedAt) : "",
            updatedUserId: isSet(object.updatedUserId) ? globalThis.String(object.updatedUserId) : "",
            deletedAt: isSet(object.deletedAt) ? globalThis.String(object.deletedAt) : "",
            deletedUserId: isSet(object.deletedUserId) ? globalThis.String(object.deletedUserId) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.createdAt !== "") {
            obj.createdAt = message.createdAt;
        }
        if (message.createdUserId !== "") {
            obj.createdUserId = message.createdUserId;
        }
        if (message.updatedAt !== "") {
            obj.updatedAt = message.updatedAt;
        }
        if (message.updatedUserId !== "") {
            obj.updatedUserId = message.updatedUserId;
        }
        if (message.deletedAt !== "") {
            obj.deletedAt = message.deletedAt;
        }
        if (message.deletedUserId !== "") {
            obj.deletedUserId = message.deletedUserId;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.Product.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseProduct();
        message.productId = object.productId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        message.createdAt = object.createdAt ?? "";
        message.createdUserId = object.createdUserId ?? "";
        message.updatedAt = object.updatedAt ?? "";
        message.updatedUserId = object.updatedUserId ?? "";
        message.deletedAt = object.deletedAt ?? "";
        message.deletedUserId = object.deletedUserId ?? "";
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseCreateProductData() {
    return { name: "", description: "", url: "", icon: undefined };
}
exports.CreateProductData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        if (message.icon !== undefined) {
            writer.uint32(34).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProductData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.CreateProductData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateProductData();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseUpdateProductData() {
    return { productId: "", name: "", description: "", url: "", icon: undefined };
}
exports.UpdateProductData = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.icon !== undefined) {
            writer.uint32(42).string(message.icon);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProductData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.url = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateProductData.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateProductData();
        message.productId = object.productId ?? "";
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        message.icon = object.icon ?? undefined;
        return message;
    },
};
function createBaseGetProductRequest() {
    return { productId: "" };
}
exports.GetProductRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { productId: isSet(object.productId) ? globalThis.String(object.productId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        return obj;
    },
    create(base) {
        return exports.GetProductRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetProductRequest();
        message.productId = object.productId ?? "";
        return message;
    },
};
function createBaseGetProductsRequest() {
    return { pagination: undefined, sorts: [], filters: [] };
}
exports.GetProductsRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationRequest.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.sorts) {
            base_1.Sort.encode(v, writer.uint32(18).fork()).join();
        }
        for (const v of message.filters) {
            base_1.Filter.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProductsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = base_1.PaginationRequest.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.sorts.push(base_1.Sort.decode(reader, reader.uint32()));
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.filters.push(base_1.Filter.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? base_1.PaginationRequest.fromJSON(object.pagination) : undefined,
            sorts: globalThis.Array.isArray(object?.sorts) ? object.sorts.map((e) => base_1.Sort.fromJSON(e)) : [],
            filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e) => base_1.Filter.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationRequest.toJSON(message.pagination);
        }
        if (message.sorts?.length) {
            obj.sorts = message.sorts.map((e) => base_1.Sort.toJSON(e));
        }
        if (message.filters?.length) {
            obj.filters = message.filters.map((e) => base_1.Filter.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetProductsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetProductsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.sorts = object.sorts?.map((e) => base_1.Sort.fromPartial(e)) || [];
        message.filters = object.filters?.map((e) => base_1.Filter.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetProductsResponse() {
    return { pagination: undefined, data: [] };
}
exports.GetProductsResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pagination !== undefined) {
            base_1.PaginationResponse.encode(message.pagination, writer.uint32(10).fork()).join();
        }
        for (const v of message.data) {
            exports.Product.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProductsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.pagination = base_1.PaginationResponse.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.data.push(exports.Product.decode(reader, reader.uint32()));
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? base_1.PaginationResponse.fromJSON(object.pagination) : undefined,
            data: globalThis.Array.isArray(object?.data) ? object.data.map((e) => exports.Product.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pagination !== undefined) {
            obj.pagination = base_1.PaginationResponse.toJSON(message.pagination);
        }
        if (message.data?.length) {
            obj.data = message.data.map((e) => exports.Product.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetProductsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetProductsResponse();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? base_1.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        message.data = object.data?.map((e) => exports.Product.fromPartial(e)) || [];
        return message;
    },
};
function createBaseCreateProductRequest() {
    return { product: undefined, userId: "" };
}
exports.CreateProductRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.product !== undefined) {
            exports.CreateProductData.encode(message.product, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.product = exports.CreateProductData.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            product: isSet(object.product) ? exports.CreateProductData.fromJSON(object.product) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.product !== undefined) {
            obj.product = exports.CreateProductData.toJSON(message.product);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateProductRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateProductRequest();
        message.product = (object.product !== undefined && object.product !== null)
            ? exports.CreateProductData.fromPartial(object.product)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseUpdateProductRequest() {
    return { product: undefined, userId: "" };
}
exports.UpdateProductRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.product !== undefined) {
            exports.UpdateProductData.encode(message.product, writer.uint32(10).fork()).join();
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.product = exports.UpdateProductData.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            product: isSet(object.product) ? exports.UpdateProductData.fromJSON(object.product) : undefined,
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.product !== undefined) {
            obj.product = exports.UpdateProductData.toJSON(message.product);
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.UpdateProductRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateProductRequest();
        message.product = (object.product !== undefined && object.product !== null)
            ? exports.UpdateProductData.fromPartial(object.product)
            : undefined;
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseDeleteProductRequest() {
    return { productId: "", userId: "" };
}
exports.DeleteProductRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.productId !== "") {
            writer.uint32(10).string(message.productId);
        }
        if (message.userId !== "") {
            writer.uint32(18).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProductRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.productId = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            productId: isSet(object.productId) ? globalThis.String(object.productId) : "",
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.productId !== "") {
            obj.productId = message.productId;
        }
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        return obj;
    },
    create(base) {
        return exports.DeleteProductRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteProductRequest();
        message.productId = object.productId ?? "";
        message.userId = object.userId ?? "";
        return message;
    },
};
function createBaseCreateSuccess() {
    return { product: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.product !== undefined) {
            exports.Product.encode(message.product, writer.uint32(10).fork()).join();
        }
        if (message.error !== undefined) {
            base_1.ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.product = exports.Product.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = base_1.ErrorResponse.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            product: isSet(object.product) ? exports.Product.fromJSON(object.product) : undefined,
            error: isSet(object.error) ? base_1.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.product !== undefined) {
            obj.product = exports.Product.toJSON(message.product);
        }
        if (message.error !== undefined) {
            obj.error = base_1.ErrorResponse.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.CreateSuccess.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSuccess();
        message.product = (object.product !== undefined && object.product !== null)
            ? exports.Product.fromPartial(object.product)
            : undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? base_1.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
exports.ProductServiceServiceName = "product.v1.ProductService";
class ProductServiceClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.ProductServiceServiceName;
        this.rpc = rpc;
        this.GetProduct = this.GetProduct.bind(this);
        this.GetProducts = this.GetProducts.bind(this);
        this.CreateProduct = this.CreateProduct.bind(this);
        this.UpdateProduct = this.UpdateProduct.bind(this);
        this.DeleteProduct = this.DeleteProduct.bind(this);
    }
    GetProduct(request) {
        const data = exports.GetProductRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetProduct", data);
        return promise.then((data) => exports.Product.decode(new wire_1.BinaryReader(data)));
    }
    GetProducts(request) {
        const data = exports.GetProductsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetProducts", data);
        return promise.then((data) => exports.GetProductsResponse.decode(new wire_1.BinaryReader(data)));
    }
    CreateProduct(request) {
        const data = exports.CreateProductRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateProduct", data);
        return promise.then((data) => exports.CreateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    UpdateProduct(request) {
        const data = exports.UpdateProductRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateProduct", data);
        return promise.then((data) => base_1.UpdateSuccess.decode(new wire_1.BinaryReader(data)));
    }
    DeleteProduct(request) {
        const data = exports.DeleteProductRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeleteProduct", data);
        return promise.then((data) => base_1.DeleteSuccess.decode(new wire_1.BinaryReader(data)));
    }
}
exports.ProductServiceClientImpl = ProductServiceClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=product.js.map