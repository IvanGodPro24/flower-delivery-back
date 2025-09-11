import { Order } from '../../db/models/Order.js';

export const getOrders = () =>
  Order.find().populate('products.flowerId', 'name price image');
