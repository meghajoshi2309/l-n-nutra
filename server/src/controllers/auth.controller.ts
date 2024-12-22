import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/auth.service';
import { loginSchema, registrationSchema } from '../validators/validation';
import { z } from 'zod';

export const register = async (req: Request, res: Response) => {
  try {
    // Parse and validate the request body
    const parsedData = registrationSchema.parse(req.body);

    // Proceed with registration
    const user = await registerUser(parsedData);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({ error: error.errors });
    } else {
      // Handle other errors
      res.status(500).json({ error: error.message });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parsedData = loginSchema.parse(req.body);
    const { token, user } = await loginUser(parsedData);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(401).json({ error: error.errors });
    } else {
      // Handle other errors
      res.status(500).json({ error: error.message });
    }
  }
};
