import { CustomerUpdateManyWithoutAccountsInput } from "./CustomerUpdateManyWithoutAccountsInput";

export type AccountUpdateInput = {
  address?: string | null;
  customers?: CustomerUpdateManyWithoutAccountsInput;
  industry?: string | null;
  name?: string | null;
  website?: string | null;
};
