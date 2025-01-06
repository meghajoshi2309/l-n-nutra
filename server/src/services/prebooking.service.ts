import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get the current prebooking count
export const getPrebookingCount = async () => {
  return await prisma.prebookingCount.findFirst();
};

// Increment the prebooking count
export const incrementPrebookingCount = async () => {
  const prebookingCount = await prisma.prebookingCount.findFirst();
  if (!prebookingCount) {
    return await prisma.prebookingCount.create({
      data: { count: 1 },
    });
  }
  return await prisma.prebookingCount.update({
    where: { id: prebookingCount.id },
    data: { count: prebookingCount.count + 1 },
  });
};

// Create a new prebooking
export const createPrebooking = async (userId: number) => {
  return await prisma.prebooking.create({
    data: { userId },
  });
};

// Get all prebookings
export const getAllPrebookings = async () => {
  return await prisma.prebooking.findMany({
    include: { user: true },
  });
};

export const getPrebookingByUserId = async (userId: number) => {
    return await prisma.prebooking.findFirst({
      where: { userId },
    });
  };