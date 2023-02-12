import Joi from 'joi';
import { IUserLogin } from '../interfaces';

const validateLogin = (user: IUserLogin) => {
  const loginSchema = Joi.object({
    username: Joi.string().required().label('username'),
    password: Joi.string().required().label('password'),
  }).required().messages({
    'string.empty': '{#label} is required',
  });
  const { error } = loginSchema.validate(user);
  return error;
};

export default validateLogin;