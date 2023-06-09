import { Router } from 'express';
import ProductControllers from '../controllers/ProductControllers';

const routers = Router();

const productControllers = new ProductControllers();

routers.get('/', productControllers.getAllProducts.bind(productControllers));
routers.post('/', productControllers.createProduct.bind(productControllers));

export default routers;