import Joi from 'joi';
import { IUser } from '../interfaces';

const validateUser = (user: IUser) => {
  const userSchema = Joi.object({
    username: Joi.string().required().min(3).label('username'),
    password: Joi.string().required().min(8).label('password'),
    level: Joi.number().required().greater(0).label('level'),
    vocation: Joi.string().required().min(3).label('vocation'),
  }).required().messages({
    'string.empty': '{#label} is required',
    'string.base': '{#label} must be a string',
    'string.min': '{#label} length must be at least 3 characters long',
    'number.greater': '{#label} must be greater than or equal to 1',
  });

  const { error } = userSchema.validate(user);
  if (error?.message.includes('password') && error?.message.includes('3')) {
    error.message = error.message.replace('3', '8');
    error.details[0].message = error.message.replace('3', '8');
  }
  return error;
};

export default validateUser;
