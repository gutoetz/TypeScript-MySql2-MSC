import { Router } from 'express';
import UsersControllers from '../controllers/UsersControllers';

const routers = Router();

const usersControllers = new UsersControllers();

routers.post('/', usersControllers.createUser.bind(usersControllers));

export default routers;