import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPhoneNumber = async (data: { userId: number; mobilenumber: string }) => {
  return await prisma.phoneNumber.create({ data });
};

export const getPhoneNumber = async (id: number) => {
  return await prisma.phoneNumber.findUnique({ where: { id } });
};

export const updatePhoneNumber = async (id: number, data: { mobilenumber?: string }) => {
  return await prisma.phoneNumber.update({ where: { id }, data });
};

export const deletePhoneNumber = async (id: number) => {
  return await prisma.phoneNumber.delete({ where: { id } });
};