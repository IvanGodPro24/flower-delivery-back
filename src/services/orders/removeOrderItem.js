import createHttpError from 'http-errors';
import { Order } from '../../db/models/Order.js';
import { Flower } from '../../db/models/Flower.js';

export const removeOrderItem = async (orderId, flowerId) => {
  const order = await Order.findById(orderId);

  if (!order) throw createHttpError(404, 'Order not found');

  const itemExists = order.products.some(
    (p) => p.flowerId.toString() === flowerId.toString(),
  );

  if (!itemExists) throw createHttpError(404, 'Item not found in order');

  order.products = order.products.filter(
    (p) => p.flowerId.toString() !== flowerId.toString(),
  );

  if (order.products.length === 0) {
    await Order.findByIdAndDelete(orderId);
    return { message: 'Order deleted - no items left' };
  }

  const remainingFlowerIds = order.products.map((p) => p.flowerId);
  const flowers = await Flower.find({ _id: { $in: remainingFlowerIds } });

  const priceMap = flowers.reduce((map, flower) => {
    map[flower._id.toString()] = flower.price;
    return map;
  }, {});

  let newTotal = 0;

  for (const product of order.products) {
    const price = priceMap[product.flowerId.toString()];

    if (!price)
      throw createHttpError(
        400,
        `Price not found for flower ${product.flowerId}`,
      );

    newTotal += price * product.quantity;
  }

  order.totalPrice = Math.round(newTotal * 100) / 100;

  const savedOrder = await order.save();

  return await Order.findById(savedOrder._id).populate(
    'products.flowerId',
    'name price image',
  );
};
