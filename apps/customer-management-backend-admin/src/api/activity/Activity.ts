import { Customer } from "../customer/Customer";
import { User } from "../user/User";

export type Activity = {
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  note: string | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
