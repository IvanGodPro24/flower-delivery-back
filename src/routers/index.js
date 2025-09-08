import { Router } from 'express';
import flowerRouter from './flowers.js';
import shopRouter from './shops.js';
import orderRouter from './orders.js';

const router = Router();

router.use('/flowers', flowerRouter);
router.use('/shops', shopRouter);
router.use('/orders', orderRouter);

export default router;
