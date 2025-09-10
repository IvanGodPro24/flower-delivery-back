import { Order } from '../../db/models/Order.js';
import { Flower } from '../../db/models/Flower.js';
import createHttpError from 'http-errors';

export const createOrder = async (data) => {
  const flowerIds = data.products.map((item) => item.flowerId);
  const flowers = await Flower.find({ _id: { $in: flowerIds } });

  if (flowers.length !== flowerIds.length)
    throw createHttpError(400, 'Some flowers not found');

  const flowerPriceMap = flowers.reduce((map, flower) => {
    map[flower._id.toString()] = flower.price;
    return map;
  }, {});

  const totalPrice = data.products.reduce((sum, item) => {
    const flowerPrice = flowerPriceMap[item.flowerId];

    if (!flowerPrice)
      throw createHttpError(400, `Price not found for flower ${item.flowerId}`);

    return sum + item.quantity * flowerPrice;
  }, 0);

  const order = new Order({
    ...data,
    totalPrice,
  });

  return await order.save();
};
