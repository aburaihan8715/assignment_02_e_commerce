import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderZodSchema from './order.validation';

const createAOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = orderZodSchema.parse({ ...req.body });
    const newProduct = await orderService.createAnOrderIntoDB(zodParsedData);

    if (!newProduct) {
      throw new Error('Failed to create product! Try again later');
    }
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!!',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    let filter = {};
    if (req.query) filter = req.query;

    const orders = await orderService.getAllOrdersFormDB(filter);
    res.status(200).json({
      success: true,
      result: orders.length,
      message: 'Orders retrieved successfully',
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const orderController = {
  createAOrder,
  getAllOrders,
};
