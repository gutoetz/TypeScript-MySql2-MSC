import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UsersControllers {
  constructor(private services = new UsersService()) {}

  async createUser(req: Request, res: Response) {
    const user = req.body;
    const newUser = await this.services.createUser(user);
    res.status(201).json({ token: newUser });
  }
}

export default UsersControllers;