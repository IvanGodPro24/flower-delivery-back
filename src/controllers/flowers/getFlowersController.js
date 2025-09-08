import { getFlowers } from '../../services/flowers/getFlowers.js';

export const getFlowersController = async (req, res) => {
  const flowers = await getFlowers();

  res.json(flowers);
};

