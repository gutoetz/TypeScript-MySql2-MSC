import { Request, Response } from 'express';
import { IUserLogin } from '../interfaces';
import LoginService from '../services/LoginService';

class LoginControllers {
  constructor(private model = new LoginService()) {}

  async userLogin(req: Request, res: Response) {
    const user: IUserLogin = req.body;
    const login = await this.model.userLogin(user);
    res.status(200).json({ token: login });
  }
}

export default LoginControllers;