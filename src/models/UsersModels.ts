import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';
import createToken from '../utils/JWT';

class UsersModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }  

  async createUser(user: IUser) {
    const { username, level, password, vocation } = user;
    const query = `INSERT INTO Trybesmith.users
     (username, level, password, vocation) VALUES(?,?,?,?)`;
    await this.connection.execute<ResultSetHeader>(query, [username, level, password, vocation]);
    const newToken = createToken(username, vocation, level);
    return newToken;
  } 
}

export default UsersModels;