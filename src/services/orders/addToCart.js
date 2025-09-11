import { Order } from '../../db/models/Order.js';
import { Flower } from '../../db/models/Flower.js';
import createHttpError from 'http-errors';

export const addToCart = async (flowerId, quantity = 1) => {
  const flower = await Flower.findById(flowerId);
  if (!flower) throw createHttpError(404, 'Flower not found');

  let order = await Order.findOne({ name: { $exists: false } });

  if (!order) {
    order = new Order({
      products: [{ flowerId, quantity }],
      totalPrice: flower.price * quantity,
    });
  } else {
    const existing = order.products.find(
      (p) => p.flowerId.toString() === flowerId.toString(),
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      order.products.push({ flowerId, quantity });
    }

    let total = 0;
    for (let p of order.products) {
      const flowerDoc = await Flower.findById(p.flowerId);
      total += flowerDoc.price * p.quantity;
    }

    order.totalPrice = total;
  }

  const savedOrder = await order.save();

  return await Order.findById(savedOrder._id).populate(
    'products.flowerId',
      'name price image',
    
  );
};
