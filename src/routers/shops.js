import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getShopsController } from '../controllers/shops/getShopsController.js';
import { getShopsByIdController } from '../controllers/shops/getShopsByIdController.js';
import { getFlowersByShopIdController } from '../controllers/shops/getFlowersByShopIdController.js';

const router = Router();

router.get('/', ctrlWrapper(getShopsController));

router.get('/:shopId/flowers', ctrlWrapper(getFlowersByShopIdController));

router.get('/:shopId', ctrlWrapper(getShopsByIdController));

export default router;
