import prisma from '../models';
import bcrypt from 'bcryptjs';
import { loginSchema, registrationSchema } from '../validators/validation';
import { z } from 'zod';
import { JWT_SECRET } from '../config';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { sendVerificationEmail } from './email.service';
import { Role } from '@prisma/client';

export const registerUser = async (data: z.infer<typeof registrationSchema>) => {
  // Check if user with email already exists
  const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
  if (existingUser) {
    throw new Error('Email already in use');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const verificationToken = uuidv4();

  console.log("verificationToken",verificationToken);
  
  // Create the user
  const user = await prisma.user.create({
    data: {
      username: data.username,
      email: data.email,
      password: hashedPassword,
      verificationToken,
      role: Role.USER,
    },
  });
  await sendVerificationEmail(data.email, verificationToken);
  return user;
};

export const loginUser = async (data: z.infer<typeof loginSchema>) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error('User not found');

  if (!user.verified) throw new Error('Please verify your email before logging in');

  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user.id, role: user.role, userName: user.username }, JWT_SECRET, { expiresIn: '24h' });
  return { token, user };
};


export const verifyUser = async (token: string) => {
  const user = await prisma.user.findFirst({ where: { verificationToken: token } });
  if (!user) throw new Error('Invalid verification token');
  await prisma.user.update({
    where: { id: user.id },
    data: { verified: true, verificationToken: null },
  });
  return user;
};