import createHttpError from 'http-errors';
import { Order } from '../../db/models/Order.js';
import { Flower } from '../../db/models/Flower.js';

export const updateOrderItem = async (orderId, flowerId, quantity) => {
  const order = await Order.findById(orderId);

  if (!order) throw createHttpError(404, 'Order not found');

  const product = order.products.find(
    (p) => p.flowerId.toString() === flowerId.toString(),
  );

  if (!product) throw createHttpError(404, 'Product not found in order');

  product.quantity = quantity;

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
