import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getFlowersController } from '../controllers/flowers/getFlowersController.js';
import { getFlowersByIdController } from '../controllers/flowers/getFlowersByIdController.js';

const router = Router();

router.get('/', ctrlWrapper(getFlowersController));

router.get('/:flowerId', ctrlWrapper(getFlowersByIdController));

export default router;
