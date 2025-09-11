import { getHistory } from '../../services/orders/getHistory.js';

export const getHistoryController = async (req, res) => {
  const cart = await getHistory();

  res.json(cart || { message: 'History is empty' });
};
