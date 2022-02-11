import { Transaction } from "../transaction/Transaction";

export type Customer = {
  company: string | null;
  createdAt: Date;
  id: string;
  name: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
