import { FloatFilter } from "../../util/FloatFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
};
