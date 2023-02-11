import { Pool } from 'mysql2/promise';
import { RowDataPacket } from 'mysql2';
import IProduct from '../interfaces';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  //   public async createProduct(name: string, amount: string) {
  //     const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?);';
  //     const creatingProduct = await this.connection.execute(query, [name, amount]);
  //   }

  public async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows;
  }
}

export default ProductModel;