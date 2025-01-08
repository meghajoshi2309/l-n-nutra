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
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteAllCartItemsController = exports.deleteCartItemController = exports.updateCartItemController = exports.addCartItemController = exports.getCartItemsController = void 0;
const cart_service_1 = require("../services/cart.service");
const cart_validation_1 = require("../validators/cart.validation");
const zod_1 = require("zod");
const getCartItemsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userID = (_a = req.user) === null || _a === void 0 ? void 0 : _a.userId; // Assuming user is attached to req by auth middleware
    if (!userID) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    const cartItems = yield (0, cart_service_1.getCartItems)(userID);
    res.json(cartItems);
});
exports.getCartItemsController = getCartItemsController;
const addCartItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const userID = (_b = req.user) === null || _b === void 0 ? void 0 : _b.userId; // Assuming user is attached to req by auth middleware
        if (!userID) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const parsedData = cart_validation_1.addCartItemSchema.parse(req.body);
        const cartItem = yield (0, cart_service_1.addCartItem)(userID, parsedData.productId, parsedData.quantity);
        res.status(201).json(cartItem);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.addCartItemController = addCartItemController;
const updateCartItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = cart_validation_1.updateCartItemSchema.parse(req.body);
        const cartItemId = parseInt(req.params.id);
        const cartItem = yield (0, cart_service_1.updateCartItem)(cartItemId, parsedData.quantity);
        if (!cartItem) {
            res.status(404).json({ error: 'Cart item not found' });
            return;
        }
        res.json(cartItem);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.updateCartItemController = updateCartItemController;
const deleteCartItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItemId = parseInt(req.params.id);
    try {
        const cartItem = yield (0, cart_service_1.deleteCartItem)(cartItemId);
        if (!cartItem) {
            res.status(404).json({ error: 'Cart item not found' });
            return;
        }
        res.json({ message: 'Cart item soft deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteCartItemController = deleteCartItemController;
const softDeleteAllCartItemsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const userId = (_c = req.user) === null || _c === void 0 ? void 0 : _c.userId; // Assuming user is attached to req by auth middleware
    if (!userId) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }
    try {
        const result = yield (0, cart_service_1.softDeleteAllCartItems)(userId);
        if (result.count === 0) {
            res.status(404).json({ message: 'No cart items found to soft delete' });
            return;
        }
        res.status(200).json({ message: 'All cart items soft deleted successfully', result });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.softDeleteAllCartItemsController = softDeleteAllCartItemsController;
