import { Router } from 'express';
import LoginControllers from '../controllers/LoginControllers';

const loginControllers = new LoginControllers();

const routers = Router();

routers.post('/', loginControllers.userLogin.bind(loginControllers));

export default routers;