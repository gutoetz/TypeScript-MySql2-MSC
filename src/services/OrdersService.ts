import { INewOrder } from '../interfaces';
import ordersSchema from '../middlewares/orders.middleware';
import connection from '../models/connection';
import OrdersModels from '../models/OrdersModels';

class OrdersService {
  model: OrdersModels;

  constructor() {
    this.model = new OrdersModels(connection);
  }

  async getAllOrders() {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }

  async createOrder(order: INewOrder) {
    ordersSchema(order);
    const newOrder = await this.model.createOrder(order);
    return newOrder;
  }
}

export default OrdersService;