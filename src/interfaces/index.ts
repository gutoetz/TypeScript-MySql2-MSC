interface INewProduct {
  id: number,
  name: string,
  amount: string,
}

interface IProduct extends INewProduct {
  orderId?: number, 
}

export { INewProduct, IProduct };