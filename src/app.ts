import express, { Application } from 'express';
import cors from 'cors';
import { productRouter } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';

const app: Application = express();

// GLOBAL MIDDLEWARES
app.use(express.json());
app.use(cors());

// WELCOME ROUTE
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to our e_commerce!!!!',
  });
});

// ROUTES
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// UNHANDLED ROUTES
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `Route not found!!`,
  });
});

export default app;
