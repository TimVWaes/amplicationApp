import { Customer } from "../customer/Customer";

export type Transaction = {
  amount: number;
  createdAt: Date;
  customer?: Customer;
  id: string;
  updatedAt: Date;
};
