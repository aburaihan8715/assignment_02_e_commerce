import { z } from 'zod';

// Define the Zod schema based on the Mongoose schema
const orderZodSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default orderZodSchema;
