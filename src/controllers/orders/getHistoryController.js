import { getHistory } from '../../services/orders/getHistory.js';
import createHttpError from 'http-errors';

export const getHistoryController = async (req, res) => {
  const { email, phone, orderId } = req.body;

  const history = await getHistory({ email, phone, orderId });

  if (!history || history.length === 0)
    throw createHttpError(404, 'Orders not found');

  res.json(history);
};
