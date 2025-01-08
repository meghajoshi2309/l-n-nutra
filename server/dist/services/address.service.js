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
exports.deleteAddress = exports.updateAddress = exports.getAddressById = exports.getAddressesByUserId = exports.createAddress = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createAddress = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.address.create({
        data,
    });
});
exports.createAddress = createAddress;
const getAddressesByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.address.findMany({
        where: { userId },
    });
});
exports.getAddressesByUserId = getAddressesByUserId;
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.address.findUnique({
        where: { id },
    });
});
exports.getAddressById = getAddressById;
const updateAddress = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.address.update({
        where: { id },
        data,
    });
});
exports.updateAddress = updateAddress;
const deleteAddress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.address.delete({
        where: { id },
    });
});
exports.deleteAddress = deleteAddress;
