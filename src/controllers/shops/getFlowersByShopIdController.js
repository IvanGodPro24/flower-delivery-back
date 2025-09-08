import createHttpError from 'http-errors';
import { getShopsById } from '../../services/shops/getShopsById.js';
import { getFlowersByShopId } from '../../services/shops/getFlowersByShopId.js';

export const getFlowersByShopIdController = async (req, res) => {
  const { shopId } = req.params;

  const shop = await getShopsById(shopId);
  if (!shop) throw createHttpError(404, 'Shop not found');

  const flowers = await getFlowersByShopId(shopId);

  res.json({
    shop: {
      _id: shop._id,
      name: shop.name,
    },
    flowers,
    count: flowers.length,
  });
};
