import { Router } from 'express';
import OrdersControllers from '../controllers/OrdersControllers';

const routers = Router();

const ordersControllers = new OrdersControllers();

routers.get('/', ordersControllers.getAllOrders.bind(ordersControllers));

export default routers;