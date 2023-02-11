import ProductModel from '../models/ProductModels';
import connection from '../models/connection';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAllProducts() {
    const products = await this.model.getAllProducts();
    return products;
  }
}

export default ProductService;