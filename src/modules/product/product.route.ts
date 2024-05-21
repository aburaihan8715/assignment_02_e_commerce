import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router
  .route('/')
  .post(productController.createAProduct)
  .get(productController.getAllProducts);

router.get('/:productId', productController.getAProduct);
router.put('/:productId', productController.updateAProduct);
router.delete('/:productId', productController.deleteAProduct);

export const productRouter = router;
