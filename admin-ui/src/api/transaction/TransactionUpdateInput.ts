import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number;
  customer?: CustomerWhereUniqueInput;
};
