import { Order } from "../../db/models/Order.js";

export const getOrderById = (id) =>
  Order.findById(id).populate('products.flowerId', 'name price');
