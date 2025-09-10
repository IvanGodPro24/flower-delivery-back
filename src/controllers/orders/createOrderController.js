import { createOrder } from '../../services/orders/createOrder.js';
import { Order } from '../../db/models/Order.js';

export const createOrderController = async (req, res) => {
  const order = await createOrder(req.body);

  const populatedOrder = await Order.findById(order._id).populate(
    'products.flowerId',
    'name price image',
  );

  res.status(201).json(populatedOrder);
};
