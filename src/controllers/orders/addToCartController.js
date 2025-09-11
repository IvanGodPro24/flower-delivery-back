import { addToCart } from '../../services/orders/addToCart.js';

export const addToCartController = async (req, res) => {
  const { flowerId, quantity } = req.body;

  const order = await addToCart(flowerId, quantity || 1);

  res.json(order);
};
