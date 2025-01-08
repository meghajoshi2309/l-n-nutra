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
exports.checkUserOrder = exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrders = exports.createOrder = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOrder = (userId, address, mobileNumber, netAmount, paymentMode, products) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma.order.create({
        data: {
            userId,
            address,
            mobilenumber: mobileNumber,
            netAmount,
            paymentMode,
            orderProducts: {
                create: products.map((product) => ({
                    productId: product.productId,
                    quantity: product.quantity,
                })),
            },
            orderEvents: {
                create: { status: client_1.OrderEventStatus.PENDING },
            },
        },
    });
    if (paymentMode === 'ONLINE') {
        // Increment the prebooking count
        const prebookingCount = yield prisma.prebookingCount.findFirst();
        if (!prebookingCount) {
            yield prisma.prebookingCount.create({
                data: { count: 1 },
            });
        }
        else {
            yield prisma.prebookingCount.update({
                where: { id: prebookingCount.id },
                data: { count: prebookingCount.count + 1 },
            });
        }
        // Create an entry in the Prebooking table for the user
        yield prisma.prebooking.create({
            data: { userId },
        });
    }
    return order;
});
exports.createOrder = createOrder;
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield prisma.order.findMany({
        include: {
            user: true,
            orderProducts: { include: { product: true } },
            orderEvents: true,
        },
    });
    return orders;
});
exports.getOrders = getOrders;
const getOrderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma.order.findUnique({
        where: { id },
        include: {
            user: true,
            orderProducts: { include: { product: true } },
            orderEvents: true,
        },
    });
    return order;
});
exports.getOrderById = getOrderById;
const updateOrder = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma.order.update({
        where: { id },
        data,
        include: {
            user: true,
            orderProducts: { include: { product: true } },
            orderEvents: true,
        },
    });
    return order;
});
exports.updateOrder = updateOrder;
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma.order.delete({
        where: { id },
    });
    return order;
});
exports.deleteOrder = deleteOrder;
const checkUserOrder = (email, productId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.orderProduct.findFirst({
        where: {
            productId: productId,
            order: {
                user: {
                    email: email,
                },
            },
        },
        include: {
            product: true,
        },
    });
});
exports.checkUserOrder = checkUserOrder;
