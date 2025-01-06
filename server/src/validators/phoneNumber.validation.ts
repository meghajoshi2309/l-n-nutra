import { z } from 'zod';

export const PhoneNumberSchema = z.object({
  userId: z.number(),
  mobilenumber: z.string().min(10).max(15),
});

export const UpdatePhoneNumberSchema = PhoneNumberSchema.partial();