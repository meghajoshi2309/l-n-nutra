import { Request, Response } from 'express';
import {
  getCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  softDeleteAllCartItems
} from '../services/cart.service';
import { addCartItemSchema, updateCartItemSchema } from '../validators/cart.validation';
import { z } from 'zod';
import { log } from 'console';

export const getCartItemsController = async (req: Request, res: Response): Promise<void> => {
  const userID = req.user?.userId; // Assuming user is attached to req by auth middleware
  if (!userID) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  const cartItems = await getCartItems(userID);
  res.json(cartItems);
};

export const addCartItemController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userID = req.user?.userId; // Assuming user is attached to req by auth middleware
    if (!userID) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const parsedData = addCartItemSchema.parse(req.body);
    const cartItem = await addCartItem(userID, parsedData.productId, parsedData.quantity);
    res.status(201).json(cartItem);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const updateCartItemController = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = updateCartItemSchema.parse(req.body);
    const cartItemId = parseInt(req.params.id);
    const cartItem = await updateCartItem(cartItemId, parsedData.quantity);
    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }
    res.json(cartItem);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

export const deleteCartItemController = async (req: Request, res: Response): Promise<void> => {
  const cartItemId = parseInt(req.params.id);
  try {
    const cartItem = await deleteCartItem(cartItemId);
    if (!cartItem) {
      res.status(404).json({ error: 'Cart item not found' });
      return;
    }
    res.json({ message: 'Cart item soft deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const softDeleteAllCartItemsController = async (req: Request, res: Response): Promise<void> => {
  const userId = req.user?.userId; // Assuming user is attached to req by auth middleware

  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const result = await softDeleteAllCartItems(userId);
    if (result.count === 0) {
      res.status(404).json({ message: 'No cart items found to soft delete' });
      return;
    }
    res.status(200).json({ message: 'All cart items soft deleted successfully', result });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};