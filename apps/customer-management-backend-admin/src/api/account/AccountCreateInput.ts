import { CustomerCreateNestedManyWithoutAccountsInput } from "./CustomerCreateNestedManyWithoutAccountsInput";

export type AccountCreateInput = {
  address?: string | null;
  customers?: CustomerCreateNestedManyWithoutAccountsInput;
  industry?: string | null;
  name?: string | null;
  website?: string | null;
};
