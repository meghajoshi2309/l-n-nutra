"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prebooking_controller_1 = require("../controllers/prebooking.controller");
const router = express_1.default.Router();
// Prebooking Count Routes
router.get('/prebooking-count', prebooking_controller_1.getPrebookingCount);
router.post('/prebooking-count/increment', prebooking_controller_1.incrementPrebookingCount);
// Prebooking Routes
router.post('/prebookings', prebooking_controller_1.createPrebooking);
router.get('/prebookings', prebooking_controller_1.getAllPrebookings);
// Discount Eligibility Route
router.post('/check-discount-eligibility', prebooking_controller_1.checkDiscountEligibility);
exports.default = router;
