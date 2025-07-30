import { Account } from "../account/Account";
import { Activity } from "../activity/Activity";
import { Contact } from "../contact/Contact";
import { Task } from "../task/Task";

export type Customer = {
  account?: Account | null;
  activities?: Array<Activity>;
  address: string | null;
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
