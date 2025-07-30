import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  note?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
