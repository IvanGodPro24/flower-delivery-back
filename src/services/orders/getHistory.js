import { Order } from '../../db/models/Order.js';

export const getHistory = async ({ email, phone, orderId }) => {
  let filter = { isFinalized: true };

  if (orderId) {
    filter._id = orderId;
  } else if (email && phone) {
    filter.email = email;
    filter.phone = phone;
  }

  return Order.find(filter).populate('products.flowerId', 'name price image');
};
