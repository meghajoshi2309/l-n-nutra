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
exports.verifyUser = exports.loginUser = exports.registerUser = void 0;
const models_1 = __importDefault(require("../models"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if user with email already exists
    const existingUser = yield models_1.default.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
        throw new Error('Email already in use');
    }
    // Hash the password
    const hashedPassword = yield bcryptjs_1.default.hash(data.password, 10);
    const verificationToken = (0, uuid_1.v4)();
    // Create the user
    const user = yield models_1.default.user.create({
        data: {
            username: data.username,
            email: data.email,
            password: hashedPassword,
            verificationToken,
            role: client_1.Role.USER,
        },
    });
    // await sendVerificationEmail(data.email, verificationToken);
    return user;
});
exports.registerUser = registerUser;
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.user.findUnique({ where: { email: data.email } });
    if (!user)
        throw new Error('User not found');
    // if (!user.verified) throw new Error('Please verify your email before logging in');
    const passwordMatch = yield bcryptjs_1.default.compare(data.password, user.password);
    if (!passwordMatch)
        throw new Error('Invalid credentials');
    const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role, userName: user.username }, config_1.JWT_SECRET, { expiresIn: '24h' });
    return { token, user };
});
exports.loginUser = loginUser;
const verifyUser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.default.user.findFirst({ where: { verificationToken: token } });
    if (!user)
        throw new Error('Invalid verification token');
    yield models_1.default.user.update({
        where: { id: user.id },
        data: { verified: true, verificationToken: null },
    });
    return user;
});
exports.verifyUser = verifyUser;
