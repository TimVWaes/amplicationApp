import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  company?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
