// validators/address.validation.ts
import { z } from 'zod';

export const createAddressSchema = z.object({
  lineOne: z.string().min(1, { message: 'Line One is required' }),
  lineTwo: z.string().optional(),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  pincode: z.string().min(1, { message: 'Pincode is required' }),
  userId: z.number().int().positive({ message: 'User ID must be a positive integer' }),
});

export const updateAddressSchema = z.object({
  lineOne: z.string().min(1, { message: 'Line One is required' }).optional(),
  lineTwo: z.string().optional(),
  city: z.string().min(1, { message: 'City is required' }).optional(),
  country: z.string().min(1, { message: 'Country is required' }).optional(),
  pincode: z.string().min(1, { message: 'Pincode is required' }).optional(),
  userId: z.number().int().positive({ message: 'User ID must be a positive integer' }).optional(),
});

export type AddressInput = z.infer<typeof createAddressSchema>;