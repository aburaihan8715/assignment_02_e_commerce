import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { orderZodSchema } from './path-to-your-zod-schema';
import { orderService } from './path-to-your-service';

const createAOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    // Parse the request body with Zod schema
    const zodParsedData = orderZodSchema.parse(req.body);

    // Create a new order in the database
    const newOrder = await orderService.createAnOrderIntoDB(zodParsedData);

    if (!newOrder) {
      throw new Error('Failed to create product! Try again later');
    }

    // Respond with success if order creation is successful
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
        errors: error.errors, // Provide detailed validation errors
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

export default createAOrder;
