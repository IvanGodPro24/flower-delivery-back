import { finalizeOrder } from '../../services/orders/finalizeOrder.js';

export const finalizeOrderController = async (req, res) => {
  const { orderId } = req.params;

  const updatedOrder = await finalizeOrder(orderId, req.body);

  res.json(updatedOrder);
};
