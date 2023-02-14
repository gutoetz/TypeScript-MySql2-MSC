import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { INewOrder, IOrder } from '../interfaces';

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

  async createOrder(order: INewOrder) {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const map = order.productsIds.map((_) => '?').join(', ');
    const productsIdsQuery = `(${map})`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [order.userId]);
    const queryProduct = `UPDATE Trybesmith.products SET
     order_id = (?) WHERE id IN ${productsIdsQuery}`;
    const [{ affectedRows }] = await this.connection
      .execute<ResultSetHeader>(queryProduct, [insertId, ...order.productsIds]);
    if (affectedRows > 0) return order;
  }
}

export default OrdersModels;