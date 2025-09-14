import { Router } from 'express';
import { getOrdersController } from '../controllers/orders/getOrdersController.js';
import { getOrderByIdController } from '../controllers/orders/getOrderByIdController.js';
import { createOrderController } from '../controllers/orders/createOrderController.js';
import { addFlowerToOrderController } from '../controllers/orders/addFlowerToOrderController.js';
import { updateOrderItemController } from '../controllers/orders/updateOrderItemController.js';
import { removeOrderItemController } from '../controllers/orders/removeOrderItemController.js';
import { deleteOrderController } from '../controllers/orders/deleteOrderController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addToCartSchema,
  createOrderItemSchema,
  createOrderSchema,
  finalizeOrderSchema,
  getOrderHistorySchema,
  updateOrderSchema,
} from '../validation/orders.js';
import { validateBody } from '../middlewares/validateBody.js';
import { addToCartController } from '../controllers/orders/addToCartController.js';
import { finalizeOrderController } from '../controllers/orders/finalizeOrderController.js';
import { getCartController } from '../controllers/orders/getCartController.js';
import { getHistoryController } from '../controllers/orders/getHistoryController.js';

const router = Router();

router.get('/', ctrlWrapper(getOrdersController));

router.get('/cart', ctrlWrapper(getCartController));

router.post(
  '/history',
  validateBody(getOrderHistorySchema),
  ctrlWrapper(getHistoryController),
);

router.get('/:orderId', ctrlWrapper(getOrderByIdController));

router.post(
  '/cart',
  validateBody(addToCartSchema),
  ctrlWrapper(addToCartController),
);

router.patch(
  '/:orderId/finalize',
  validateBody(finalizeOrderSchema),
  ctrlWrapper(finalizeOrderController),
);

router.post(
  '/',
  validateBody(createOrderSchema),
  ctrlWrapper(createOrderController),
);

router.post(
  '/:orderId/items',
  validateBody(createOrderItemSchema),
  ctrlWrapper(addFlowerToOrderController),
);

router.patch(
  '/:orderId/items/:flowerId',
  validateBody(updateOrderSchema),
  ctrlWrapper(updateOrderItemController),
);

router.delete(
  '/:orderId/items/:flowerId',
  ctrlWrapper(removeOrderItemController),
);

router.delete('/:orderId', ctrlWrapper(deleteOrderController));

export default router;
