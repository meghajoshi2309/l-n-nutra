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
exports.getProductDetails = exports.deleteOrderController = exports.updateOrderController = exports.getOrderByIdController = exports.getOrdersController = exports.createOrderController = void 0;
const order_service_1 = require("../services/order.service");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, address, mobileNumber, netAmount, paymentMode, products, } = req.body;
        const order = yield (0, order_service_1.createOrder)(userId, address, mobileNumber, netAmount, paymentMode, products);
        if (!userId || !paymentMode) {
            res.status(400).json({ message: 'User ID and payment mode are required' });
            return;
        }
        res.status(201).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createOrderController = createOrderController;
const getOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield (0, order_service_1.getOrders)();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrdersController = getOrdersController;
const getOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const order = yield (0, order_service_1.getOrderById)(id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrderByIdController = getOrderByIdController;
const updateOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const data = req.body;
        const order = yield (0, order_service_1.updateOrder)(id, data);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateOrderController = updateOrderController;
const deleteOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const order = yield (0, order_service_1.deleteOrder)(id);
        if (!order) {
            res.status(404).json({ message: 'Order not found' });
            return;
        }
        res.status(204).json({ message: 'Order deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteOrderController = deleteOrderController;
const getProductDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, productId } = req.query;
    if (!email || !productId) {
        res.status(400).json({ message: "Email and product ID are required" });
        return;
    }
    try {
        const orderProduct = yield (0, order_service_1.checkUserOrder)(email, parseInt(productId));
        if (orderProduct) {
            res.json(orderProduct.product);
        }
        else {
            res.status(404).json({ message: "Product not found or user has not ordered this product" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getProductDetails = getProductDetails;
