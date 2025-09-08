import { getShops } from '../../services/shops/getShops.js';

export const getShopsController = async (req, res) => {
  const shops = await getShops();

  res.json(shops);
};
