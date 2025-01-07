import { Request, Response } from 'express';
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  checkUserOrder,
} from '../services/order.service';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      address,
      mobileNumber,
      netAmount,
      paymentMode,
      products,
    } = req.body;
    const order = await createOrder(
      userId,
      address,
      mobileNumber,
      netAmount,
      paymentMode,
      products
    );
    if (!userId || !paymentMode) {
      res.status(400).json({ message: 'User ID and payment mode are required' });
      return
    }
    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrderByIdController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await getOrderById(id);
    if (!order) {
      res.status(404).json({ message: 'Order not found' });
      return
    }
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrderController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const order = await updateOrder(id, data);
    if (!order) {
      res.status(404).json({ message: 'Order not found' });
      return
    }
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrderController = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const order = await deleteOrder(id);
    if (!order) {
      res.status(404).json({ message: 'Order not found' });
      return
    }
    res.status(204).json({ message: 'Order deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductDetails = async (req: Request, res: Response) => {
  const { email, productId } = req.query;

  if (!email || !productId) {
    res.status(400).json({ message: "Email and product ID are required" });
    return
  }

  try {
    const orderProduct = await checkUserOrder(email as string, parseInt(productId as string));
    if (orderProduct) {
      res.json(orderProduct.product);
    } else {
      res.status(404).json({ message: "Product not found or user has not ordered this product" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};