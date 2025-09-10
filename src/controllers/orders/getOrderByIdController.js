import createHttpError from 'http-errors';
import { getOrderById } from '../../services/orders/getOrderById.js';

export const getOrderByIdController = async (req, res) => {
  const { orderId } = req.params;

  const order = await getOrderById(orderId);

  if (!order) throw createHttpError(404, 'Order not found');

  res.json(order);
};
