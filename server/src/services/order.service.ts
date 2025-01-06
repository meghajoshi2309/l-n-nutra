import { OrderEventStatus, PaymentMethod, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createOrder = async (
  userId: number,
  address: string,
  mobileNumber: string,
  netAmount: number,
  paymentMode: PaymentMethod,
  products: { productId: number; quantity: number }[]
) => {
  
  const order = await prisma.order.create({
    data: {
      userId,
      address,
      mobilenumber: mobileNumber,
      netAmount,
      paymentMode,
      orderProducts: {
        create: products.map((product) => ({
          productId: product.productId,
          quantity: product.quantity,
        })),
      },
      orderEvents: {
        create: { status: OrderEventStatus.PENDING },
      },
    },
  });

  if (paymentMode === 'ONLINE') {
    // Increment the prebooking count
    const prebookingCount = await prisma.prebookingCount.findFirst();
    if (!prebookingCount) {
      await prisma.prebookingCount.create({
        data: { count: 1 },
      });
    } else {
      await prisma.prebookingCount.update({
        where: { id: prebookingCount.id },
        data: { count: prebookingCount.count + 1 },
      });
    }

    // Create an entry in the Prebooking table for the user
    await prisma.prebooking.create({
      data: { userId },
    });
  }
  
  return order;
};

export const getOrders = async () => {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
      orderProducts: { include: { product: true } },
      orderEvents: true,
    },
  });
  return orders;
};

export const getOrderById = async (id: number) => {
  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      orderProducts: { include: { product: true } },
      orderEvents: true,
    },
  });
  return order;
};

export const updateOrder = async (
  id: number,
  data: { [key: string]: any }
) => {
  const order = await prisma.order.update({
    where: { id },
    data,
    include: {
      user: true,
      orderProducts: { include: { product: true } },
      orderEvents: true,
    },
  });
  return order;
};

export const deleteOrder = async (id: number) => {
  const order = await prisma.order.delete({
    where: { id },
  });
  return order;
};