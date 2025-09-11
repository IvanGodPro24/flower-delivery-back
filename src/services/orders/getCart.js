import { Order } from '../../db/models/Order.js';

export const getCart = () =>
  Order.find({ isFinalized: false }).populate(
    'products.flowerId',
    'name price image',
  );
