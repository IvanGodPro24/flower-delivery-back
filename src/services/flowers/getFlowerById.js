import { Flower } from '../../db/models/Flower.js';

export const getFlowerById = (flowerId) =>
  Flower.findById(flowerId).populate('shopId', 'name');
