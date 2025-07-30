import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ActivityListRelationFilter } from "../activity/ActivityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type CustomerWhereInput = {
  account?: AccountWhereUniqueInput;
  activities?: ActivityListRelationFilter;
  address?: StringNullableFilter;
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
