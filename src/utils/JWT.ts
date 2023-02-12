import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (username: string, id: number) => jwt.sign(
  { username, id },
  secret,
  { expiresIn: '7d', algorithm: 'HS256' },
);

export default createToken;