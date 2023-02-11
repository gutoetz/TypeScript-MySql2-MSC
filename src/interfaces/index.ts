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

export { INewProduct, IProduct, IRProduct, IUser };