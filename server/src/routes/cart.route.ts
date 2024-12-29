import { Router } from 'express';
import { 
  getCartItemsController, 
  addCartItemController, 
  updateCartItemController, 
  deleteCartItemController 
} from '../controllers/cart.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Get all cart items - accessible by authenticated users
router.get('/', authenticate, getCartItemsController);

// Add a product to cart - accessible by authenticated users
router.post('/', authenticate, addCartItemController);

// Update cart item quantity - accessible by authenticated users
router.put('/:id', authenticate, updateCartItemController);

// Delete cart item - accessible by authenticated users
router.delete('/:id', authenticate, deleteCartItemController);

export default router;