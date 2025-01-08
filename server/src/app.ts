import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import productRouter from './routes/product.route';
import cartRouter from './routes/cart.route';
import addressRouter from './routes/address.route'
import orderRouter from './routes/order.route'
import phoneRouter from './routes/phoneNumber.route'
import prisma from './models';
import prebookingRoutes from './routes/prebooking.route'

const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/addresses', addressRouter);
app.use('/api/orders', orderRouter);
app.use('/api/phone-number', phoneRouter);
// Example backend route to fetch mobile number
app.get('/api/phone-number/user/:userId', async (req, res) => {
  const { userId } = req.params;
  const phoneNumber = await prisma.phoneNumber.findFirst({
    where: { userId: Number(userId) },
  });
  res.json(phoneNumber);
});
app.use('/api/prebook', prebookingRoutes);


export default app;