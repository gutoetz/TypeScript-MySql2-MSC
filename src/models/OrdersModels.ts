import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

class OrdersModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders() {
    const query = `SELECT a.id, a.user_id AS userId, json_arrayagg(b.id) as productsIds FROM
     Trybesmith.orders AS a INNER JOIN Trybesmith.products AS b ON a.id = b.order_id GROUP BY a.id`;
    const [orders] = await this.connection.execute< IOrder[] & RowDataPacket[]>(query);
    return orders;
  }
}

export default OrdersModels;