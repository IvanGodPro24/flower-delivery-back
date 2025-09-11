import { getCart } from '../../services/orders/getCart.js';

export const getCartController = async (req, res) => {
  const cart = await getCart();

  res.json(cart || { message: 'Cart is empty' });
};
