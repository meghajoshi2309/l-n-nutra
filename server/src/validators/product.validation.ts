import { z } from 'zod';

export const createProductSchema = z.object({
  Name: z.string().min(6, { message: 'Name is required' }),
  Price: z.number().positive({ message: 'Price must be positive' }),
  StockQuantity: z.number().int().positive({ message: 'Stock Quantity must be a positive integer' }),
  Description: z.string().optional(),
  Tag: z.string().optional(),
  ImageUrl: z.string().optional(),
});

export const updateProductSchema = z.object({
  Name: z.string().min(1, { message: 'Name is required' }).optional(),
  Price: z.number().positive({ message: 'Price must be positive' }).optional(),
  StockQuantity: z.number().int().positive({ message: 'Stock Quantity must be a positive integer' }).optional(),
  Description: z.string().optional(),
  Tag: z.string().optional(),
  ImageUrl: z.string().optional(),
});