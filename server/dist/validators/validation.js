"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registrationSchema = void 0;
const zod_1 = require("zod");
exports.registrationSchema = zod_1.z.object({
    username: zod_1.z.string().min(3, 'Username must be at least 3 characters'),
    email: zod_1.z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/, 'Invalid email address'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: zod_1.z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters'),
});
