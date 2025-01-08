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
exports.verify = exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
const auth_service_2 = require("../services/auth.service");
const validation_1 = require("../validators/validation");
const zod_1 = require("zod");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Parse and validate the request body
        const parsedData = validation_1.registrationSchema.parse(req.body);
        // Proceed with registration
        const user = yield (0, auth_service_2.registerUser)(parsedData);
        res.status(201).json({ message: 'User registered successfully', user });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            // Handle Zod validation errors
            res.status(400).json({ error: error.errors });
        }
        else {
            // Handle other errors
            res.status(500).json({ error: error.message });
        }
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = validation_1.loginSchema.parse(req.body);
        const { token, user } = yield (0, auth_service_2.loginUser)(parsedData);
        res.status(200).json({ message: 'Login successful', token, user });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            // Handle Zod validation errors
            res.status(401).json({ error: error.errors });
        }
        else {
            // Handle other errors
            res.status(500).json({ error: error.message });
        }
    }
});
exports.login = login;
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.params.token;
        const user = yield (0, auth_service_1.verifyUser)(token);
        res.status(200).json({ message: 'Email verified successfully', user });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.verify = verify;
