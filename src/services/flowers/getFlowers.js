import { Flower } from '../../db/models/Flower.js';

export const getFlowers = () => Flower.find().populate('shopId', 'name');
