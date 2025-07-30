import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  address?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  industry?: StringNullableFilter;
  name?: StringNullableFilter;
  website?: StringNullableFilter;
};
