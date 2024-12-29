import { z } from 'zod';

export const addCartItemSchema = z.object({
  productId: z.number().positive(),
  quantity: z.number().positive(),
});

export const updateCartItemSchema = z.object({
  quantity: z.number().positive(),
});