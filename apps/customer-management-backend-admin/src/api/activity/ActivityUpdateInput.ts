import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  note?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
