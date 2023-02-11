import ProductModel from '../models/ProductModels';
import connection from '../models/connection';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async createProduct(name: string, amount: string) {
    const newProduct = await this.model.createProduct(name, amount);
    return newProduct;
  }

  async getAllProducts() {
    const products = await this.model.getAllProducts();
    return products;
  }
}

export default ProductService;