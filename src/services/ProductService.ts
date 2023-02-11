import ProductModel from '../models/ProductModels';
import connection from '../models/connection';
import productValidate from '../middlewares/product.middleware';
import { IRProduct } from '../interfaces';
import HttpException from '../utils/http.exception';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createProduct(product: IRProduct) {
    const error = productValidate(product);
    if (error) {
      if (error.details[0].type.includes('required')) {
        throw new HttpException(400, error.details[0].message);
      }
      throw new HttpException(422, error.details[0].message);
    }
    const newProduct = await this.model.createProduct(product);
    return newProduct;
  }

  async getAllProducts() {
    const products = await this.model.getAllProducts();
    return products;
  }
}

export default ProductService;