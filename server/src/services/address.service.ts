import { PrismaClient } from '@prisma/client';
import { AddressInput } from '../validators/address.validation';

const prisma = new PrismaClient();

export const createAddress = async (data: AddressInput) => {
    return prisma.address.create({
    data,
  });
};

export const getAddressesByUserId = async (userId: number) => {
  return prisma.address.findMany({
    where: { userId },
  });
};

export const getAddressById = async (id: number) => {
  return prisma.address.findUnique({
    where: { id },
  });
};

export const updateAddress = async (id: number, data: Partial<AddressInput>) => {
  return prisma.address.update({
    where: { id },
    data,
  });
};

export const deleteAddress = async (id: number) => {
  return prisma.address.delete({
    where: { id },
  });
};