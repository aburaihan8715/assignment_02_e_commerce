import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router
  .route('/')
  .post(orderController.createAOrder)
  .get(orderController.getAllOrders);

export const orderRouter = router;
