import createHttpError from 'http-errors';
import { getFlowerById } from '../../services/flowers/getFlowerById.js';

export const getFlowersByIdController = async (req, res) => {
  const { flowerId } = req.params;

  const flower = await getFlowerById(flowerId);

  if (!flower) throw createHttpError(404, 'Flower not found');

  res.json(flower);
};
