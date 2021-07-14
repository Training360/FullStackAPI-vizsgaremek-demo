import { Product } from "./product";
import { User } from "./user";

export class Order {
  _id: string = '';
  customer: User = new User();
  products: Product[] = [];
  time: Date = new Date();
  note: string = '';
}
