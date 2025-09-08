import { Flower } from '../../db/models/Flower.js';

export const getFlowersByShopId = (shopId) =>
  Flower.find({ shopId }).populate('shopId', 'name');
