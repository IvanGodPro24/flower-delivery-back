import { removeOrderItem } from '../../services/orders/removeOrderItem.js';

export const removeOrderItemController = async (req, res) => {
  const { orderId, flowerId } = req.params;

  const result = await removeOrderItem(orderId, flowerId);

  if (result.message) return res.json(result);

  res.json(result);
};
