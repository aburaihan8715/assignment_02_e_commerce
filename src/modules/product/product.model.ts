import mongoose from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

const variantSchema = new mongoose.Schema<TVariant>({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});

const inventorySchema = new mongoose.Schema<TInventory>({
  quantity: {
    type: Number,
  },
  inStock: {
    type: Boolean,
  },
});

const productSchema = new mongoose.Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
  },

  variants: {
    type: [variantSchema],
  },

  inventory: {
    type: inventorySchema,
  },
});

export const Product = mongoose.model('Product', productSchema);
