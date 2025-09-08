import { Flower } from '../../db/models/Flower.js';

export const getFlowerById = async (flowerId) => {
  const flower = await Flower.findById(flowerId);
  return flower;
};
