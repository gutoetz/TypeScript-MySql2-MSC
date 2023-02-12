import { Request, Response } from 'express';
import OrdersService from '../services/OrdersService';

class OrdersControllers {
  constructor(private model = new OrdersService()) {}

  async getAllOrders(req: Request, res: Response) {
    const allOrders = await this.model.getAllOrders();
    res.status(200).json(allOrders);
  }
}

export default OrdersControllers;