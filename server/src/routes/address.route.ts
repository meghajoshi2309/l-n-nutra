import express from 'express';
import * as addressController from '../controllers/address.controller';

const router = express.Router();

router.post('/', addressController.createAddress);
router.get('/user/:userId', addressController.getAddressesByUserId);
router.get('/:id', addressController.getAddressById);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);

export default router;