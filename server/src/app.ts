import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import productRouter from './routes/product.route';
import cartRouter from './routes/cart.route';
import addressRouter from './routes/address.route'

const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/addresses', addressRouter);

export default app;