import express, { Application } from 'express';
import { productRouter } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';

const app: Application = express();

// GLOBAL MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// UNHANDLED ROUTES
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: `${req.originalUrl} not found!!`,
  });
});

export default app;
