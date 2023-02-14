import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';
import { authenticatToken } from '../utils/JWT';

class OrdersControllers {
  constructor(private model = new OrdersService()) {}

  async getAllOrders(req: Request, res: Response) {
    const allOrders = await this.model.getAllOrders();
    res.status(200).json(allOrders);
  }

  async createOrder(req: Request, res: Response) {
    const token: string | undefined = req.headers.authorization;
    const { productsIds } = req.body;
    const decryptedToken = await authenticatToken(token);
    const order = {
      userId: decryptedToken.id,
      productsIds,
    };
    const newOrder = await this.model.createOrder(order);
    res.status(201).json(newOrder);
  }
}

export default OrdersControllers;