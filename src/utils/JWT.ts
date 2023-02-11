import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (username: string, vocation: string, level: number) => jwt.sign(
  { username, level, vocation },
  secret,
  { expiresIn: '7d', algorithm: 'HS256' },
);

export default createToken;