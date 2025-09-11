import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getShopsController } from '../controllers/shops/getShopsController.js';
import { getShopsByIdController } from '../controllers/shops/getShopsByIdController.js';

const router = Router();

router.get('/', ctrlWrapper(getShopsController));

router.get('/:shopId', ctrlWrapper(getShopsByIdController));

export default router;
