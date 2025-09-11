import { Order } from '../../db/models/Order.js';

export const getHistory = () =>
  Order.find({ isFinalized: true }).populate(
    'products.flowerId',
    'name price image',
  );
