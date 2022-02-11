import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
