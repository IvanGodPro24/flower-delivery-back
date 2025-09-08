import { Shop } from '../../db/models/Shop.js';

export const getShops = () => Shop.find();
