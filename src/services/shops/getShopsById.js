import { Shop } from '../../db/models/Shop.js';

export const getShopsById = (shopId) => Shop.findById(shopId);
