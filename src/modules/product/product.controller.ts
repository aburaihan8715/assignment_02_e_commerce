import { Request, Response } from 'express';
import { productService } from './product.service';
import productZodSchema from './product.validation';

const createAProduct = async (req: Request, res: Response) => {
  try {
    const zodParsedData = productZodSchema.parse({ ...req.body });
    const newProduct = await productService.createAProductIntoDB(zodParsedData);

    if (!newProduct) {
      throw new Error('Failed to create product! Try again later');
    }

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
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

const getAProduct = async (req: Request, res: Response) => {
  const product = await productService.getAProductFromDB(req.params.productId);

  if (!product) {
    throw new Error(`No product found this ID: ${req.params.productId}`);
  }

  try {
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  let filter = {};
  if (req.query.searchTerm) {
    const search = req.query.searchTerm;
    const searchRegexp = new RegExp(`.*${search}.*`, 'i');
    filter = {
      $or: [
        { name: { $regex: searchRegexp } },
        { category: { $regex: searchRegexp } },
        { description: { $regex: searchRegexp } },
      ],
    };
  }

  // console.log(query);
  const products = await productService.getAllProductsFormDB(filter);

  try {
    res.status(200).json({
      success: true,
      result: products.length,
      message: 'Products retrieved successfully',
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const updateAProduct = async (req: Request, res: Response) => {
  const updatedProduct = await productService.updateAProductIntoDB(
    req.params.productId,
    { ...req.body },
  );

  if (!updatedProduct) {
    throw new Error(`No product found this ID: ${req.params.productId}`);
  }

  try {
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

const deleteAProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await productService.deleteAProductFromDB(
      req.params.productId,
    );

    if (!deletedProduct) {
      throw new Error(`No product found this ID: ${req.params.productId}`);
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const productController = {
  createAProduct,
  getAProduct,
  getAllProducts,
  updateAProduct,
  deleteAProduct,
};
