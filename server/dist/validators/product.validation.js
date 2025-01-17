"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
exports.createProductSchema = zod_1.z.object({
    Name: zod_1.z.string().min(6, { message: 'Name is required' }),
    Price: zod_1.z.number().positive({ message: 'Price must be positive' }),
    StockQuantity: zod_1.z.number().int().positive({ message: 'Stock Quantity must be a positive integer' }),
    Description: zod_1.z.string().optional(),
    Tag: zod_1.z.string().optional(),
    ImageUrl: zod_1.z.string().optional(),
});
exports.updateProductSchema = zod_1.z.object({
    Name: zod_1.z.string().min(1, { message: 'Name is required' }).optional(),
    Price: zod_1.z.number().positive({ message: 'Price must be positive' }).optional(),
    StockQuantity: zod_1.z.number().int().positive({ message: 'Stock Quantity must be a positive integer' }).optional(),
    Description: zod_1.z.string().optional(),
    Tag: zod_1.z.string().optional(),
    ImageUrl: zod_1.z.string().optional(),
});
