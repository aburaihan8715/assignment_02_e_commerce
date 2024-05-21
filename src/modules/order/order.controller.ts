import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderZodSchema from './order.validation';
import { ZodError } from 'zod';

const createAOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = orderZodSchema.parse({ ...req.body });
    const newOrder = await orderService.createAnOrderIntoDB(zodParsedData);

    if (!newOrder) {
      throw new Error('Failed to create product! Try again later');
    }
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder,
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      // Handle Zod validation errors specifically
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    } else if (error instanceof Error) {
      // Handle general errors
      res.status(500).json({
        success: false,
        message: error.message,
      });
    } else {
      // Fallback for unknown errors
      res.status(500).json({
        success: false,
        message: 'Something went wrong!!',
      });
    }
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error?.message,
        error: error,
      });
    } else {
      // Fallback for unknown errors
      res.status(500).json({
        success: false,
        message: 'Something went wrong!!',
      });
    }
  }
};

export const orderController = {
  createAOrder,
  getAllOrders,
};
