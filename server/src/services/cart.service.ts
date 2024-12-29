import prisma from '../models';

export const getCartItems = async (userId: number) => {
  return await prisma.cartItem.findMany({ where: { userId: userId } });
};

export const addCartItem = async (userId: number, productId: number, quantity: number) => {
  return await prisma.cartItem.create({ data: { userId, productId, quantity } });
};

export const updateCartItem = async (cartItemId: number, quantity: number) => {
  return await prisma.cartItem.update({ where: { id: cartItemId }, data: { quantity } });
};

export const deleteCartItem = async (cartItemId: number) => {
  return await prisma.cartItem.delete({ where: { id: cartItemId } });
};