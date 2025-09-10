import { getOrders } from '../../services/orders/getOrders.js';

export const getOrdersController = async (req, res) => {
  const orders = await getOrders();

  res.json(orders);
};
