import { Flower } from '../../db/models/Flower.js';

export const getFlowers = (filter = {}) =>
  Flower.find(filter).populate('shopId', 'name');
