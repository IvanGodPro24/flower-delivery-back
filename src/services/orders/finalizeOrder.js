import { Order } from '../../db/models/Order.js';
import createHttpError from 'http-errors';

export const finalizeOrder = async (orderId, userData) => {
  const { name, email, phone, address } = userData;

  if (!name || !email || !phone || !address)
    throw createHttpError(400, 'All user data is required to finalize order');

  const order = await Order.findById(orderId);
  if (!order) throw createHttpError(404, 'Order not found');

  order.name = name;
  order.email = email;
  order.phone = phone;
  order.address = address;
  order.isFinalized = true;

  const savedOrder = await order.save();

  return await Order.findById(savedOrder._id).populate(
    'products.flowerId',
    'name price image',
  );
};
