"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteAllCartItems = exports.deleteCartItem = exports.updateCartItem = exports.addCartItem = exports.getCartItemById = exports.getCartItems = void 0;
const models_1 = __importDefault(require("../models"));
const getCartItems = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.findMany({
        where: {
            userId: userId,
            deletedAt: null, // Only fetch non-deleted items
        },
    });
});
exports.getCartItems = getCartItems;
const getCartItemById = (cartItemId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.findFirst({
        where: {
            id: cartItemId,
            deletedAt: null, // Exclude soft-deleted items
        },
    });
});
exports.getCartItemById = getCartItemById;
const addCartItem = (userId, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.create({ data: { userId, productId, quantity } });
});
exports.addCartItem = addCartItem;
const updateCartItem = (cartItemId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.update({ where: { id: cartItemId }, data: { quantity } });
});
exports.updateCartItem = updateCartItem;
const deleteCartItem = (cartItemId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.update({
        where: { id: cartItemId },
        data: { deletedAt: new Date() }, // Soft delete by setting deletedAt
    });
});
exports.deleteCartItem = deleteCartItem;
const softDeleteAllCartItems = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.default.cartItem.updateMany({
        where: {
            userId: userId,
            deletedAt: null, // Only soft delete items that haven't been deleted yet
        },
        data: {
            deletedAt: new Date(), // Set deletedAt to the current timestamp
        },
    });
});
exports.softDeleteAllCartItems = softDeleteAllCartItems;
