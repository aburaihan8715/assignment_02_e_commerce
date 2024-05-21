import { z } from 'zod';

// Define Zod schemas
const variantZodSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryZodSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productZodSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  variants: z.array(variantZodSchema).optional(),
  inventory: inventoryZodSchema.optional(),
});

export default productZodSchema;
