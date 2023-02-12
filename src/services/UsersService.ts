import { IUser } from '../interfaces';
import validateUser from '../middlewares/users.middleware';
import connection from '../models/connection';
import UsersModels from '../models/UsersModels';
import HttpException from '../utils/http.exception';

class UsersService {
  public model: UsersModels;

  constructor() {
    this.model = new UsersModels(connection);
  }

  async createUser(user: IUser) {
    const error = validateUser(user);
    if (error) {
      if (error.details[0].type.includes('required')) {
        throw new HttpException(400, error.details[0].message);
      }
      throw new HttpException(422, error.details[0].message);
    }
    const newUser = await this.model.createUser(user);
    return newUser;
  }
}

export default UsersService;