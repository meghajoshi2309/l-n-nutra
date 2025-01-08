"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhoneNumberSchema = exports.PhoneNumberSchema = void 0;
const zod_1 = require("zod");
exports.PhoneNumberSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    mobilenumber: zod_1.z.string().min(10).max(15),
});
exports.UpdatePhoneNumberSchema = exports.PhoneNumberSchema.partial();
