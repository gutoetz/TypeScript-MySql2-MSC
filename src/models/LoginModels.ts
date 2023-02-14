import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUserWId, IUserLogin } from '../interfaces';
import HttpException from '../utils/http.exception';
import { createToken } from '../utils/JWT';

class LoginModels {
  connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  async userLogin(user: IUserLogin) {
    const { username, password } = user;
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
    const [checkUser] = await this
      .connection.execute<IUserWId[] & RowDataPacket[]>(query, [username, password]);
    console.log(checkUser);
    if (checkUser.length < 1) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const { id } = checkUser[0];
    const token = createToken(username, id);
    return token;
  } 
}

export default LoginModels;