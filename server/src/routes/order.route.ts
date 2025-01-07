import { Router } from 'express';
import {
  createOrderController,
  getOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController,
  getProductDetails,
} from '../controllers/order.controller';

const router = Router();

router.post('/', createOrderController);
router.get('/', getOrdersController);
router.get('/:id', getOrderByIdController);
router.put('/:id', updateOrderController);
router.delete('/:id', deleteOrderController);
router.get('/product-details', getProductDetails);

export default router;