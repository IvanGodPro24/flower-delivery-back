import createHttpError from 'http-errors';
import { getShopsById } from '../../services/shops/getShopsById.js';

export const getShopsByIdController = async (req, res) => {
  const { shopId } = req.params;

  const shop = await getShopsById(shopId);

  if (!shop) throw createHttpError(404, 'Shop not found');

  res.json(shop);
};
