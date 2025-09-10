import createHttpError from 'http-errors';
import { deleteOrder } from '../../services/orders/deleteOrder.js';

export const deleteOrderController = async (req, res) => {
  const { orderId } = req.params;

  const deleted = await deleteOrder(orderId);

  if (!deleted) throw createHttpError(404, 'Order not found');

  res.json({ message: 'Order deleted successfully' });
};
