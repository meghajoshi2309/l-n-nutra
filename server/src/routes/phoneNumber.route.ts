import express from 'express';
import * as phoneNumberController from '../controllers/phoneNumber.controller';

const router = express.Router();

router.post('/', phoneNumberController.createPhoneNumber);
router.get('/:id', phoneNumberController.getPhoneNumber);
router.put('/:id', phoneNumberController.updatePhoneNumber);
router.delete('/:id', phoneNumberController.deletePhoneNumber);

export default router;