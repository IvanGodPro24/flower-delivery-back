import { Order } from '../../db/models/Order.js';
import { Flower } from '../../db/models/Flower.js';
import createHttpError from 'http-errors';

export const addFlowerToOrder = async (orderId, flowerId, quantity = 1) => {
  const order = await Order.findById(orderId);
  if (!order) throw createHttpError(404, 'Order not foun!d');

  const flower = await Flower.findById(flowerId);
  if (!flower) throw createHttpError(404, 'Flower not found!');

  const product = order.products.find(
    (p) => p.flowerId.toString() === flowerId.toString(),
  );

  if (product) {
    product.quantity += quantity;
  } else {
    order.products.push({ flowerId, quantity });
  }

  let newTotal = 0;
  for (let p of order.products) {
    const flowerDoc = await Flower.findById(p.flowerId);
    newTotal += flowerDoc.price * p.quantity;
  }

  order.totalPrice = newTotal;

  return await order.save();
};
