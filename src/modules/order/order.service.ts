import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createAnOrderIntoDB = async (orderData: TOrder) => {
  const product = await Product.findOne({ _id: orderData.productId });

  if (!product || product?.inventory?.quantity === undefined) {
    throw new Error('Order not found');
  }
  let productQuantity = product?.inventory?.quantity;
  const orderQuantity = orderData.quantity;

  if (orderQuantity > productQuantity) {
    throw new Error('Insufficient quantity available in inventory');
  }
  const result = await Order.create(orderData);

  productQuantity = productQuantity - orderQuantity;

  await Product.findOneAndUpdate(
    { _id: orderData.productId },
    {
      $set: {
        'inventory.quantity': productQuantity,
        'inventory.inStock': productQuantity === 0 ? false : true,
      },
    },
    { new: true },
  );

  return result;
};

const getAllOrdersFormDB = async (filter: object) => {
  const result = await Order.find(filter);
  return result;
};

export const orderService = {
  createAnOrderIntoDB,
  getAllOrdersFormDB,
};
