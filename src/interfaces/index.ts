interface IRProduct {
  name: string,
  amount: string,
}

interface INewProduct {
  id: number,
  name: string,
  amount: string,
}

interface IProduct extends INewProduct {
  orderId?: number, 
}

interface IUser {
  username: string,
  vocation: string,
  level: number,
  password:string,
}

interface IOrder {
  id: number,
  userId:number,
  productsId:number[]
}

export { INewProduct, IProduct, IRProduct, IUser, IOrder };