import prisma from '../models';

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({ where: { id: id } });
};

export const createProduct = async (data: {
  Name: string;
  Price: number;
  StockQuantity: number;
  Description?: string;
  Tag?: string;
  ImageUrl?: string;
}) => {
  return await prisma.product.create({ data });
};

export const updateProduct = async (id: number, data: {
  Name?: string;
  Price?: number;
  StockQuantity?: number;
  Description?: string;
  Tag?: string;
  ImageUrl?: string;
}) => {
  return await prisma.product.update({ where: { id: id }, data });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({ where: { id: id } });
};