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
exports.checkDiscountEligibility = exports.getAllPrebookings = exports.createPrebooking = exports.incrementPrebookingCount = exports.getPrebookingCount = void 0;
const prebookingService = __importStar(require("../services/prebooking.service"));
// Get the current prebooking count
const getPrebookingCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prebookingCount = yield prebookingService.getPrebookingCount();
        res.json(prebookingCount);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch prebooking count' });
    }
});
exports.getPrebookingCount = getPrebookingCount;
// Increment the prebooking count
const incrementPrebookingCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCount = yield prebookingService.incrementPrebookingCount();
        res.json(updatedCount);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to increment prebooking count' });
    }
});
exports.incrementPrebookingCount = incrementPrebookingCount;
// Create a new prebooking
const createPrebooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ message: 'User ID is required' });
        return;
    }
    try {
        const prebooking = yield prebookingService.createPrebooking(userId);
        res.status(201).json(prebooking);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create prebooking' });
    }
});
exports.createPrebooking = createPrebooking;
// Get all prebookings
const getAllPrebookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prebookings = yield prebookingService.getAllPrebookings();
        res.json(prebookings);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch prebookings' });
    }
});
exports.getAllPrebookings = getAllPrebookings;
const checkDiscountEligibility = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    if (!userId) {
        res.status(400).json({ message: 'User ID is required' });
        return;
    }
    try {
        // Get the current prebooking count
        const prebookingCount = yield prebookingService.getPrebookingCount();
        // Check if the prebooking count is less than 100
        if (prebookingCount && prebookingCount.count >= 100) {
            res.json({ eligible: false });
            return;
        }
        // Check if the user has an entry in the Prebooking table
        const userPrebooking = yield prebookingService.getPrebookingByUserId(userId);
        if (userPrebooking) {
            res.json({ eligible: false });
            return;
        }
        // If both conditions are met, the user is eligible
        res.json({ eligible: true });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to check discount eligibility' });
    }
});
exports.checkDiscountEligibility = checkDiscountEligibility;
