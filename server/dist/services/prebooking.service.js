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
exports.getPrebookingByUserId = exports.getAllPrebookings = exports.createPrebooking = exports.incrementPrebookingCount = exports.getPrebookingCount = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Get the current prebooking count
const getPrebookingCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.prebookingCount.findFirst();
});
exports.getPrebookingCount = getPrebookingCount;
// Increment the prebooking count
const incrementPrebookingCount = () => __awaiter(void 0, void 0, void 0, function* () {
    const prebookingCount = yield prisma.prebookingCount.findFirst();
    if (!prebookingCount) {
        return yield prisma.prebookingCount.create({
            data: { count: 1 },
        });
    }
    return yield prisma.prebookingCount.update({
        where: { id: prebookingCount.id },
        data: { count: prebookingCount.count + 1 },
    });
});
exports.incrementPrebookingCount = incrementPrebookingCount;
// Create a new prebooking
const createPrebooking = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.prebooking.create({
        data: { userId },
    });
});
exports.createPrebooking = createPrebooking;
// Get all prebookings
const getAllPrebookings = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.prebooking.findMany({
        include: { user: true },
    });
});
exports.getAllPrebookings = getAllPrebookings;
const getPrebookingByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.prebooking.findFirst({
        where: { userId },
    });
});
exports.getPrebookingByUserId = getPrebookingByUserId;
