"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deletePhoneNumber = exports.updatePhoneNumber = exports.getPhoneNumber = exports.createPhoneNumber = void 0;
const phoneNumberService = __importStar(require("../services/phoneNumber.service"));
const phoneNumber_validation_1 = require("../validators/phoneNumber.validation");
const createPhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = phoneNumber_validation_1.PhoneNumberSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json(validation.error.errors);
        return;
    }
    const phoneNumber = yield phoneNumberService.createPhoneNumber(validation.data);
    res.status(201).json(phoneNumber);
});
exports.createPhoneNumber = createPhoneNumber;
const getPhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneNumber = yield phoneNumberService.getPhoneNumber(Number(req.params.id));
    if (phoneNumber) {
        res.json(phoneNumber);
    }
    else {
        res.status(404).send('Phone number not found');
    }
});
exports.getPhoneNumber = getPhoneNumber;
const updatePhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = phoneNumber_validation_1.UpdatePhoneNumberSchema.safeParse(req.body);
    if (!validation.success) {
        res.status(400).json(validation.error.errors);
        return;
    }
    const phoneNumber = yield phoneNumberService.updatePhoneNumber(Number(req.params.id), validation.data);
    res.json(phoneNumber);
});
exports.updatePhoneNumber = updatePhoneNumber;
const deletePhoneNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield phoneNumberService.deletePhoneNumber(Number(req.params.id));
    res.status(204).send();
});
exports.deletePhoneNumber = deletePhoneNumber;
