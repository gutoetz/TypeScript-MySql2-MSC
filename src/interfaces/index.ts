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

interface IUserWId extends IUser {
  id: number
}

interface IOrder {
  id: number,
  userId:number,
  productsId:number[]
}

interface IUserLogin {
  username: string,
  password: string,
}

export { INewProduct, IProduct, IRProduct, IUser, IOrder, IUserLogin, IUserWId };