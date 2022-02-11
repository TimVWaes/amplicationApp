import { Transaction } from "../transaction/Transaction";

export type Customer = {
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
