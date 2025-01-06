import express from 'express';
import {
  getPrebookingCount,
  incrementPrebookingCount,
  createPrebooking,
  getAllPrebookings,
  checkDiscountEligibility,
} from '../controllers/prebooking.controller';

const router = express.Router();

// Prebooking Count Routes
router.get('/prebooking-count', getPrebookingCount);
router.post('/prebooking-count/increment', incrementPrebookingCount);

// Prebooking Routes
router.post('/prebookings', createPrebooking);
router.get('/prebookings', getAllPrebookings);

// Discount Eligibility Route
router.post('/check-discount-eligibility', checkDiscountEligibility);

export default router;