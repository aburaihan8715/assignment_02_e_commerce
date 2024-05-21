import { Request, Response } from 'express';

const createAOrder = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!!',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      result: 0,
      message: 'Orders retrieved successfully',
      data: null,
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

  getAllProducts: getAllOrders,
};
