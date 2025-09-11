import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getFlowersController } from '../controllers/flowers/getFlowersController.js';
import { getFlowersByIdController } from '../controllers/flowers/getFlowersByIdController.js';
import { getFlowersByShopController } from '../controllers/flowers/getFlowersByShopController.js';

const router = Router();

router.get('/', ctrlWrapper(getFlowersController));

router.get('/shop/:shopId', ctrlWrapper(getFlowersByShopController));

router.get('/:flowerId', ctrlWrapper(getFlowersByIdController));

export default router;
