import { Router } from 'express';
import { getOrdersController } from '../controllers/orders/getOrdersController.js';
import { getOrderByIdController } from '../controllers/orders/getOrderByIdController.js';
import { createOrderController } from '../controllers/orders/createOrderController.js';
import { updateOrderItemController } from '../controllers/orders/updateOrderItemController.js';
import { removeOrderItemController } from '../controllers/orders/removeOrderItemController.js';
import { deleteOrderController } from '../controllers/orders/deleteOrderController.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { createOrderSchema, updateOrderSchema } from '../validation/orders.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

router.get('/', ctrlWrapper(getOrdersController));

router.get('/:orderId', ctrlWrapper(getOrderByIdController));

router.post(
  '/',
  validateBody(createOrderSchema),
  ctrlWrapper(createOrderController),
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
