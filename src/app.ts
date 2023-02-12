import express from 'express';
import 'express-async-errors';
import httpErrorMiddleWare from './middlewares/http.error.middleware';
import productRouter from './routes/productRoutes';
import usersRouter from './routes/usersRoutes';
import ordersRouter from './routes/ordersRoutes';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);
app.use(httpErrorMiddleWare);

export default app;
