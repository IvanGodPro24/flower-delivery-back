import createHttpError from 'http-errors';
import { updateOrderItem } from '../../services/orders/updateOrderItem.js';

export const updateOrderItemController = async (req, res) => {
  const { orderId, flowerId } = req.params;
  const { quantity } = req.body;

  const updated = await updateOrderItem(orderId, flowerId, quantity);

  if (!updated) throw createHttpError(404, 'Order or item not found');

  res.json(updated);
};
