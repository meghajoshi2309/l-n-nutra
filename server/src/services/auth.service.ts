import prisma from '../models';
import bcrypt from 'bcryptjs';
import { loginSchema, registrationSchema } from '../validators/validation';
import { z } from 'zod';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';

export const registerUser = async (data: z.infer<typeof registrationSchema>) => {
  // Check if user with email already exists
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role: 'user',
    },
  });

  return user;
};

export const loginUser = async (data: z.infer<typeof loginSchema>) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error('User not found');

  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordMatch) throw new Error('Invalid password');

  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token, user };
};