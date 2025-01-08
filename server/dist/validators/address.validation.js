"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAddressSchema = exports.createAddressSchema = void 0;
// validators/address.validation.ts
const zod_1 = require("zod");
exports.createAddressSchema = zod_1.z.object({
    lineOne: zod_1.z.string().min(1, { message: 'Line One is required' }),
    lineTwo: zod_1.z.string().optional(),
    city: zod_1.z.string().min(1, { message: 'City is required' }),
    country: zod_1.z.string().min(1, { message: 'Country is required' }),
    pincode: zod_1.z.string().min(1, { message: 'Pincode is required' }),
    userId: zod_1.z.number().int().positive({ message: 'User ID must be a positive integer' }),
});
exports.updateAddressSchema = zod_1.z.object({
    lineOne: zod_1.z.string().min(1, { message: 'Line One is required' }).optional(),
    lineTwo: zod_1.z.string().optional(),
    city: zod_1.z.string().min(1, { message: 'City is required' }).optional(),
    country: zod_1.z.string().min(1, { message: 'Country is required' }).optional(),
    pincode: zod_1.z.string().min(1, { message: 'Pincode is required' }).optional(),
    userId: zod_1.z.number().int().positive({ message: 'User ID must be a positive integer' }).optional(),
});
