import { TProduct } from './product.interface';
import { Product } from './product.model';

const createAProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

const getAllProductsFormDB = async (query: object) => {
  const result = await Product.find(query);
  return result;
};

const updateAProductIntoDB = async (studentId: string, data: object) => {
  const result = await Product.findByIdAndUpdate(
    studentId,
    { $set: { ...data } },
    { new: true },
  );
  return result;
};

const deleteAProductFromDB = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const productService = {
  createAProductIntoDB,
  getAProductFromDB,
  getAllProductsFormDB,
  updateAProductIntoDB,
  deleteAProductFromDB,
};
