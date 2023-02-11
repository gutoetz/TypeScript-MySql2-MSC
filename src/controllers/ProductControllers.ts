import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductControllers {
  constructor(private productService = new ProductService()) {}

  public async getAllProducts(req: Request, res: Response) {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  }
}

export default ProductControllers;