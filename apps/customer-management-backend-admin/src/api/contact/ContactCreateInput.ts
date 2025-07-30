import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type ContactCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  position?: string | null;
};
