import { Order } from '../../db/models/Order.js';

export const deleteOrder = (id) => Order.findByIdAndDelete(id);
