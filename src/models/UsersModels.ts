import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import { createToken } from '../utils/JWT';

class UsersModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }  

  async createUser(user: IUser) {
    const { username, level, password, vocation } = user;
    const query = `INSERT INTO Trybesmith.users
     (username, level, password, vocation) VALUES(?,?,?,?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, level, password, vocation]);
    const id = insertId;
    const newToken = createToken(username, id);
    return newToken;
  } 
}

export default UsersModels;