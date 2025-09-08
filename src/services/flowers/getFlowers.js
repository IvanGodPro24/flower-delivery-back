import { Flower } from '../../db/models/Flower.js';

export const getFlowers = async () => {
  const flowers = await Flower.find();
  return flowers;
};
