import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  isCompleted?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
