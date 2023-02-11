import joi from 'joi';
import { IRProduct } from '../interfaces';

export default (product: IRProduct) => {
  const productSchema = joi.object({
    name: joi.string().min(3).required().label('name'),
    amount: joi.string().min(3).required().label('amount'),
  }).required().messages({
    'string.empty': '{#label} is required',
    'string.base': '{#label} must be a string',
    'string.min': '{#label} length must be at least 3 characters long',
  });

  const { error } = productSchema.validate(product);
  return error;
};