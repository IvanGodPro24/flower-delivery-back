import createHttpError from 'http-errors';
import { addFlowerToOrder } from '../../services/orders/addFlowerToOrder.js';

export const addFlowerToOrderController = async (req, res) => {
  const { orderId } = req.params;
  const { flowerId, quantity } = req.body;

  const updatedOrder = await addFlowerToOrder(orderId, flowerId, quantity || 1);

  if (!updatedOrder) throw createHttpError(404, 'Order or flower not found');

  res.json(updatedOrder);
};
