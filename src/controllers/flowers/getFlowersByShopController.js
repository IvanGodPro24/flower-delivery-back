import createHttpError from 'http-errors';
import { getFlowers } from '../../services/flowers/getFlowers.js';
import { getShopsById } from '../../services/shops/getShopsById.js';

export const getFlowersByShopController = async (req, res) => {
  const { shopId } = req.params;

  const shop = await getShopsById(shopId);

  if (!shop) throw createHttpError(404, 'Shop not found');

    const flowers = await getFlowers({ shopId });

  res.json({
    shop: {
      _id: shop._id,
      name: shop.name,
    },
    flowers,
    count: flowers.length,
  });
};
