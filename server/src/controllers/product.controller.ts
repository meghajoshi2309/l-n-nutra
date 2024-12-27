import { Request, Response } from 'express';
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from '../services/product.service';
import { createProductSchema, updateProductSchema } from '../validators/product.validation';
import { z } from 'zod';
import { Decimal } from '@prisma/client/runtime/library';

export const getAllProductsController = async (req: Request, res: Response): Promise<void> => {
  const products = await getAllProducts();

  const transformedProducts = products.map(product => ({
    ...product,
    Price: new Decimal(product.Price as unknown as string).toNumber(),
  }));

  res.json(transformedProducts);
};

export const getProductByIdController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);

  const product = await getProductById(id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }

  const transformedProduct = {
    ...product,
    Price: new Decimal(product.Price as unknown as string).toNumber(),
  };

  res.json(transformedProduct);
};


export const createProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = createProductSchema.parse(req.body);
    const product = await createProduct(parsedData);
    res.status(201).json(product);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const updateProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = updateProductSchema.parse(req.body);
    const id = parseInt(req.params.id);
    const product = await updateProduct(id, parsedData);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  const product = await deleteProduct(id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.json({ message: 'Product deleted successfully' });
};
