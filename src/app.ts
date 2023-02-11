import express from 'express';
import 'express-async-errors';
import httpErrorMiddleWare from './middlewares/http.error.middleware';
import productRouter from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use(httpErrorMiddleWare);

export default app;
