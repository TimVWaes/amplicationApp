import { Customer } from "../customer/Customer";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  updatedAt: Date;
};
