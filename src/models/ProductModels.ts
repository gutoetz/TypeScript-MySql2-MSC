import { Pool } from 'mysql2/promise';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, INewProduct } from '../interfaces';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProduct(name: string, amount: string): Promise<INewProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?,?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const newProduct = {
      name,
      amount,
      id: insertId,
    };
    return newProduct;
  }

  public async getAllProducts(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return rows;
  }
}

export default ProductModel;