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
}

export default OrdersService;