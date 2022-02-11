import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
