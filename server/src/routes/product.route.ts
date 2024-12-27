import { Router } from 'express';
import { 
  getAllProductsController, 
  getProductByIdController, 
  createProductController, 
  updateProductController, 
  deleteProductController 
} from '../controllers/product.controller';
import { authenticate, authorize } from '../middlewares/auth.middleware';

const router = Router();

// Get all products - accessible by all users
router.get('/', authenticate, getAllProductsController);

// Get product by ID - accessible by all users
router.get('/:id', authenticate, getProductByIdController);

// Create a product - only admins can access
router.post('/', authenticate, authorize(['admin']), createProductController);

// Update a product - only admins can access
router.put('/:id', authenticate, authorize(['admin']), updateProductController);

// Delete a product - only admins can access
router.delete('/:id', authenticate, authorize(['admin']), deleteProductController);

export default router;