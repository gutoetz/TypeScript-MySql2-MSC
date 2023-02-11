import { IUser } from '../interfaces';
import connection from '../models/connection';
import UsersModels from '../models/UsersModels';

class UsersService {
  public model: UsersModels;

  constructor() {
    this.model = new UsersModels(connection);
  }

  async createUser(user: IUser) {
    const newUser = await this.model.createUser(user);
    return newUser;
  }
}

export default UsersService;