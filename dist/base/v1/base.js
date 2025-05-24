"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSuccess = exports.UpdateSuccess = exports.CreateSuccess = exports.ErrorResponse = exports.Filter = exports.Sort = exports.PaginationResponse = exports.PaginationRequest = exports.SortOrder = exports.FilterOperator = exports.protobufPackage = void 0;
exports.filterOperatorFromJSON = filterOperatorFromJSON;
exports.filterOperatorToJSON = filterOperatorToJSON;
exports.sortOrderFromJSON = sortOrderFromJSON;
exports.sortOrderToJSON = sortOrderToJSON;
const wire_1 = require("@bufbuild/protobuf/wire");
const struct_1 = require("../../google/protobuf/struct");
exports.protobufPackage = "base.v1";
var FilterOperator;
(function (FilterOperator) {
    FilterOperator[FilterOperator["FILTER_OPERATOR_UNSPECIFIED"] = 0] = "FILTER_OPERATOR_UNSPECIFIED";
    FilterOperator[FilterOperator["EQUAL"] = 1] = "EQUAL";
    FilterOperator[FilterOperator["NOT_EQUAL"] = 2] = "NOT_EQUAL";
    FilterOperator[FilterOperator["GREATER_THAN"] = 3] = "GREATER_THAN";
    FilterOperator[FilterOperator["LESS_THAN"] = 4] = "LESS_THAN";
    FilterOperator[FilterOperator["GREATER_THAN_OR_EQUAL"] = 5] = "GREATER_THAN_OR_EQUAL";
    FilterOperator[FilterOperator["LESS_THAN_OR_EQUAL"] = 6] = "LESS_THAN_OR_EQUAL";
    FilterOperator[FilterOperator["LIKE"] = 7] = "LIKE";
    FilterOperator[FilterOperator["IN"] = 8] = "IN";
    FilterOperator[FilterOperator["NOT_IN"] = 9] = "NOT_IN";
    FilterOperator[FilterOperator["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FilterOperator || (exports.FilterOperator = FilterOperator = {}));
function filterOperatorFromJSON(object) {
    switch (object) {
        case 0:
        case "FILTER_OPERATOR_UNSPECIFIED":
            return FilterOperator.FILTER_OPERATOR_UNSPECIFIED;
        case 1:
        case "EQUAL":
            return FilterOperator.EQUAL;
        case 2:
        case "NOT_EQUAL":
            return FilterOperator.NOT_EQUAL;
        case 3:
        case "GREATER_THAN":
            return FilterOperator.GREATER_THAN;
        case 4:
        case "LESS_THAN":
            return FilterOperator.LESS_THAN;
        case 5:
        case "GREATER_THAN_OR_EQUAL":
            return FilterOperator.GREATER_THAN_OR_EQUAL;
        case 6:
        case "LESS_THAN_OR_EQUAL":
            return FilterOperator.LESS_THAN_OR_EQUAL;
        case 7:
        case "LIKE":
            return FilterOperator.LIKE;
        case 8:
        case "IN":
            return FilterOperator.IN;
        case 9:
        case "NOT_IN":
            return FilterOperator.NOT_IN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FilterOperator.UNRECOGNIZED;
    }
}
function filterOperatorToJSON(object) {
    switch (object) {
        case FilterOperator.FILTER_OPERATOR_UNSPECIFIED:
            return "FILTER_OPERATOR_UNSPECIFIED";
        case FilterOperator.EQUAL:
            return "EQUAL";
        case FilterOperator.NOT_EQUAL:
            return "NOT_EQUAL";
        case FilterOperator.GREATER_THAN:
            return "GREATER_THAN";
        case FilterOperator.LESS_THAN:
            return "LESS_THAN";
        case FilterOperator.GREATER_THAN_OR_EQUAL:
            return "GREATER_THAN_OR_EQUAL";
        case FilterOperator.LESS_THAN_OR_EQUAL:
            return "LESS_THAN_OR_EQUAL";
        case FilterOperator.LIKE:
            return "LIKE";
        case FilterOperator.IN:
            return "IN";
        case FilterOperator.NOT_IN:
            return "NOT_IN";
        case FilterOperator.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["SORT_ORDER_UNSPECIFIED"] = 0] = "SORT_ORDER_UNSPECIFIED";
    SortOrder[SortOrder["ASC"] = 1] = "ASC";
    SortOrder[SortOrder["DESC"] = 2] = "DESC";
    SortOrder[SortOrder["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
function sortOrderFromJSON(object) {
    switch (object) {
        case 0:
        case "SORT_ORDER_UNSPECIFIED":
            return SortOrder.SORT_ORDER_UNSPECIFIED;
        case 1:
        case "ASC":
            return SortOrder.ASC;
        case 2:
        case "DESC":
            return SortOrder.DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SortOrder.UNRECOGNIZED;
    }
}
function sortOrderToJSON(object) {
    switch (object) {
        case SortOrder.SORT_ORDER_UNSPECIFIED:
            return "SORT_ORDER_UNSPECIFIED";
        case SortOrder.ASC:
            return "ASC";
        case SortOrder.DESC:
            return "DESC";
        case SortOrder.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePaginationRequest() {
    return { page: 0, limit: 0 };
}
exports.PaginationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.page = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
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
            page: isSet(object.page) ? globalThis.Number(object.page) : 0,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.page !== 0) {
            obj.page = Math.round(message.page);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create(base) {
        return exports.PaginationRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginationRequest();
        message.page = object.page ?? 0;
        message.limit = object.limit ?? 0;
        return message;
    },
};
function createBasePaginationResponse() {
    return { page: 0, limit: 0, totalItems: 0, totalPages: 0, itemCount: 0 };
}
exports.PaginationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.page !== 0) {
            writer.uint32(8).int32(message.page);
        }
        if (message.limit !== 0) {
            writer.uint32(16).int32(message.limit);
        }
        if (message.totalItems !== 0) {
            writer.uint32(24).int32(message.totalItems);
        }
        if (message.totalPages !== 0) {
            writer.uint32(32).int32(message.totalPages);
        }
        if (message.itemCount !== 0) {
            writer.uint32(40).int32(message.itemCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.page = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.totalItems = reader.int32();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.totalPages = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.itemCount = reader.int32();
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
            page: isSet(object.page) ? globalThis.Number(object.page) : 0,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
            totalItems: isSet(object.totalItems) ? globalThis.Number(object.totalItems) : 0,
            totalPages: isSet(object.totalPages) ? globalThis.Number(object.totalPages) : 0,
            itemCount: isSet(object.itemCount) ? globalThis.Number(object.itemCount) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.page !== 0) {
            obj.page = Math.round(message.page);
        }
        if (message.limit !== 0) {
            obj.limit = Math.round(message.limit);
        }
        if (message.totalItems !== 0) {
            obj.totalItems = Math.round(message.totalItems);
        }
        if (message.totalPages !== 0) {
            obj.totalPages = Math.round(message.totalPages);
        }
        if (message.itemCount !== 0) {
            obj.itemCount = Math.round(message.itemCount);
        }
        return obj;
    },
    create(base) {
        return exports.PaginationResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePaginationResponse();
        message.page = object.page ?? 0;
        message.limit = object.limit ?? 0;
        message.totalItems = object.totalItems ?? 0;
        message.totalPages = object.totalPages ?? 0;
        message.itemCount = object.itemCount ?? 0;
        return message;
    },
};
function createBaseSort() {
    return { field: "", order: 0 };
}
exports.Sort = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.field !== "") {
            writer.uint32(10).string(message.field);
        }
        if (message.order !== 0) {
            writer.uint32(16).int32(message.order);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSort();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.order = reader.int32();
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
            field: isSet(object.field) ? globalThis.String(object.field) : "",
            order: isSet(object.order) ? sortOrderFromJSON(object.order) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.field !== "") {
            obj.field = message.field;
        }
        if (message.order !== 0) {
            obj.order = sortOrderToJSON(message.order);
        }
        return obj;
    },
    create(base) {
        return exports.Sort.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSort();
        message.field = object.field ?? "";
        message.order = object.order ?? 0;
        return message;
    },
};
function createBaseFilter() {
    return {
        field: "",
        operator: 0,
        stringValue: undefined,
        numberValue: undefined,
        boolValue: undefined,
        boolValues: [],
        stringValues: [],
        numberValues: [],
        value: undefined,
    };
}
exports.Filter = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.field !== "") {
            writer.uint32(10).string(message.field);
        }
        if (message.operator !== 0) {
            writer.uint32(16).int32(message.operator);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(34).string(message.numberValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(42).string(message.boolValue);
        }
        for (const v of message.boolValues) {
            writer.uint32(50).string(v);
        }
        for (const v of message.stringValues) {
            writer.uint32(58).string(v);
        }
        for (const v of message.numberValues) {
            writer.uint32(66).string(v);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(struct_1.Value.wrap(message.value), writer.uint32(74).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFilter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.operator = reader.int32();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.stringValue = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.numberValue = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.boolValue = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.boolValues.push(reader.string());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.stringValues.push(reader.string());
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.numberValues.push(reader.string());
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.value = struct_1.Value.unwrap(struct_1.Value.decode(reader, reader.uint32()));
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
            field: isSet(object.field) ? globalThis.String(object.field) : "",
            operator: isSet(object.operator) ? filterOperatorFromJSON(object.operator) : 0,
            stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
            numberValue: isSet(object.numberValue) ? globalThis.String(object.numberValue) : undefined,
            boolValue: isSet(object.boolValue) ? globalThis.String(object.boolValue) : undefined,
            boolValues: globalThis.Array.isArray(object?.boolValues)
                ? object.boolValues.map((e) => globalThis.String(e))
                : [],
            stringValues: globalThis.Array.isArray(object?.stringValues)
                ? object.stringValues.map((e) => globalThis.String(e))
                : [],
            numberValues: globalThis.Array.isArray(object?.numberValues)
                ? object.numberValues.map((e) => globalThis.String(e))
                : [],
            value: isSet(object?.value) ? object.value : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.field !== "") {
            obj.field = message.field;
        }
        if (message.operator !== 0) {
            obj.operator = filterOperatorToJSON(message.operator);
        }
        if (message.stringValue !== undefined) {
            obj.stringValue = message.stringValue;
        }
        if (message.numberValue !== undefined) {
            obj.numberValue = message.numberValue;
        }
        if (message.boolValue !== undefined) {
            obj.boolValue = message.boolValue;
        }
        if (message.boolValues?.length) {
            obj.boolValues = message.boolValues;
        }
        if (message.stringValues?.length) {
            obj.stringValues = message.stringValues;
        }
        if (message.numberValues?.length) {
            obj.numberValues = message.numberValues;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.Filter.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFilter();
        message.field = object.field ?? "";
        message.operator = object.operator ?? 0;
        message.stringValue = object.stringValue ?? undefined;
        message.numberValue = object.numberValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        message.boolValues = object.boolValues?.map((e) => e) || [];
        message.stringValues = object.stringValues?.map((e) => e) || [];
        message.numberValues = object.numberValues?.map((e) => e) || [];
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseErrorResponse() {
    return { code: 0, message: "", extra: undefined };
}
exports.ErrorResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.extra !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.extra), writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseErrorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.code = reader.int32();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.extra = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            code: isSet(object.code) ? globalThis.Number(object.code) : 0,
            message: isSet(object.message) ? globalThis.String(object.message) : "",
            extra: isObject(object.extra) ? object.extra : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== 0) {
            obj.code = Math.round(message.code);
        }
        if (message.message !== "") {
            obj.message = message.message;
        }
        if (message.extra !== undefined) {
            obj.extra = message.extra;
        }
        return obj;
    },
    create(base) {
        return exports.ErrorResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseErrorResponse();
        message.code = object.code ?? 0;
        message.message = object.message ?? "";
        message.extra = object.extra ?? undefined;
        return message;
    },
};
function createBaseCreateSuccess() {
    return { success: undefined, error: undefined };
}
exports.CreateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== undefined) {
            writer.uint32(8).bool(message.success);
        }
        if (message.error !== undefined) {
            exports.ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
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
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.ErrorResponse.decode(reader, reader.uint32());
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
            success: isSet(object.success) ? globalThis.Boolean(object.success) : undefined,
            error: isSet(object.error) ? exports.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== undefined) {
            obj.success = message.success;
        }
        if (message.error !== undefined) {
            obj.error = exports.ErrorResponse.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.CreateSuccess.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateSuccess();
        message.success = object.success ?? undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseUpdateSuccess() {
    return { success: undefined, error: undefined };
}
exports.UpdateSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== undefined) {
            writer.uint32(8).bool(message.success);
        }
        if (message.error !== undefined) {
            exports.ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.ErrorResponse.decode(reader, reader.uint32());
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
            success: isSet(object.success) ? globalThis.Boolean(object.success) : undefined,
            error: isSet(object.error) ? exports.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== undefined) {
            obj.success = message.success;
        }
        if (message.error !== undefined) {
            obj.error = exports.ErrorResponse.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.UpdateSuccess.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdateSuccess();
        message.success = object.success ?? undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function createBaseDeleteSuccess() {
    return { success: undefined, error: undefined };
}
exports.DeleteSuccess = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== undefined) {
            writer.uint32(8).bool(message.success);
        }
        if (message.error !== undefined) {
            exports.ErrorResponse.encode(message.error, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSuccess();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.success = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.error = exports.ErrorResponse.decode(reader, reader.uint32());
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
            success: isSet(object.success) ? globalThis.Boolean(object.success) : undefined,
            error: isSet(object.error) ? exports.ErrorResponse.fromJSON(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== undefined) {
            obj.success = message.success;
        }
        if (message.error !== undefined) {
            obj.error = exports.ErrorResponse.toJSON(message.error);
        }
        return obj;
    },
    create(base) {
        return exports.DeleteSuccess.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDeleteSuccess();
        message.success = object.success ?? undefined;
        message.error = (object.error !== undefined && object.error !== null)
            ? exports.ErrorResponse.fromPartial(object.error)
            : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=base.js.map