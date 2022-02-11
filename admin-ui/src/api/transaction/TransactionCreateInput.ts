import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionCreateInput = {
  amount: number;
  customer: CustomerWhereUniqueInput;
};
