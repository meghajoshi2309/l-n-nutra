import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import productRouter from './routes/product.route';

const app = express();

app.use(cors());
app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/products', productRouter);

export default app;