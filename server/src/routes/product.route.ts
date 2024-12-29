import { Router } from 'express';
import { 
  getAllProductsController, 
  getProductByIdController, 
  createProductController, 
  updateProductController, 
  deleteProductController 
} from '../controllers/product.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';
import { Role } from '@prisma/client';

const router = Router();

// Get all products - accessible by all users
router.get('/', getAllProductsController);

// Get product by ID - accessible by all users
router.get('/:id', getProductByIdController);

// Create a product - only admins can access
router.post('/', authenticate, authorize([Role.ADMIN]), createProductController);

// Update a product - only admins can access
router.put('/:id', authenticate, authorize([Role.ADMIN]), updateProductController);

// Delete a product - only admins can access
router.delete('/:id', authenticate, authorize([Role.ADMIN]), deleteProductController);

export default router;