import { Customer } from "../customer/Customer";
import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  customer?: Customer | null;
  dueDate: Date | null;
  id: string;
  isCompleted: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
