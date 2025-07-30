import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
