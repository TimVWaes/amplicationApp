import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
