import Joi from 'joi';
import { INewOrder } from '../interfaces';
import HttpException from '../utils/http.exception';

const ordersSchema = (order: INewOrder) => {
  const shcema = Joi.object({
    productsIds: Joi.array().required().items(Joi.number()).min(1)
      .required(),
    userId: Joi.number().required(),
  }).required().messages({
    'number.base': '{#label} must include only numbers',
    'array.min': '"productsIds" must include only numbers',
  });
  const { error } = shcema.validate(order);
  console.log(error);
  if (error?.details[0].type.includes('any.requi')) {
    throw new HttpException(400, error.message);
  }
  if (error) throw new HttpException(422, error.message);
};

export default ordersSchema;