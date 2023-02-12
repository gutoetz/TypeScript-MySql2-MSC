import { IUserLogin } from '../interfaces';
import validateLogin from '../middlewares/login.middleware';
import connection from '../models/connection';
import LoginModels from '../models/LoginModels';
import HttpException from '../utils/http.exception';

class LoginService {
  model: LoginModels;

  constructor() {
    this.model = new LoginModels(connection);
  }

  async userLogin(user: IUserLogin) {
    const error = validateLogin(user);
    if (error) throw new HttpException(400, error.details[0].message);
    const checkUser: string = await this.model.userLogin(user);
    return checkUser;
  }
}

export default LoginService;