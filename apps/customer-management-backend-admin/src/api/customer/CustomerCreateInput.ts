import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ActivityCreateNestedManyWithoutCustomersInput } from "./ActivityCreateNestedManyWithoutCustomersInput";
import { ContactCreateNestedManyWithoutCustomersInput } from "./ContactCreateNestedManyWithoutCustomersInput";
import { TaskCreateNestedManyWithoutCustomersInput } from "./TaskCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  account?: AccountWhereUniqueInput | null;
  activities?: ActivityCreateNestedManyWithoutCustomersInput;
  address?: string | null;
  contacts?: ContactCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  tasks?: TaskCreateNestedManyWithoutCustomersInput;
};
