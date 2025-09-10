import Joi from 'joi';

export const createOrderSchema = Joi.object({
  products: Joi.array()
    .items(
      Joi.object({
        flowerId: Joi.string()
          .regex(/^[0-9a-fA-F]{24}$/)
          .required(),
        quantity: Joi.number().integer().min(1).required(),
      }),
    )
    .min(1)
    .required(),
  name: Joi.string().trim().min(1).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().trim().min(1).required(),
  address: Joi.string().trim().min(1).required(),
});

export const updateOrderSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
});
