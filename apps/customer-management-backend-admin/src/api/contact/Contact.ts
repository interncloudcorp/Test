import { Customer } from "../customer/Customer";

export type Contact = {
  createdAt: Date;
  customer?: Customer | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  position: string | null;
  updatedAt: Date;
};
