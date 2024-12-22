import { z } from 'zod';

export const registrationSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email:  z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/, 'Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});