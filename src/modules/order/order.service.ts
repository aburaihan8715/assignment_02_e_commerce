import { TOrder } from './order.interface';
import { Order } from './order.model';

const createAnOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
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
