import prisma from '../models';

export const getCartItems = async (userId: number) => {
  return await prisma.cartItem.findMany({
    where: {
      userId: userId,
      deletedAt: null, // Only fetch non-deleted items
    },
  });
};

export const getCartItemById = async (cartItemId: number) => {
  return await prisma.cartItem.findFirst({
    where: {
      id: cartItemId,
      deletedAt: null, // Exclude soft-deleted items
    },
  });
};

export const addCartItem = async (userId: number, productId: number, quantity: number) => {
  return await prisma.cartItem.create({ data: { userId, productId, quantity } });
};

export const updateCartItem = async (cartItemId: number, quantity: number) => {
  return await prisma.cartItem.update({ where: { id: cartItemId }, data: { quantity } });
};

export const deleteCartItem = async (cartItemId: number) => {
  return await prisma.cartItem.update({
    where: { id: cartItemId },
    data: { deletedAt: new Date() }, // Soft delete by setting deletedAt
  });
};

export const softDeleteAllCartItems = async (userId: number) => {
  return await prisma.cartItem.updateMany({
    where: {
      userId: userId,
      deletedAt: null, // Only soft delete items that haven't been deleted yet
    },
    data: {
      deletedAt: new Date(), // Set deletedAt to the current timestamp
    },
  });
};