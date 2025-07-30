import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ActivityUpdateManyWithoutCustomersInput } from "./ActivityUpdateManyWithoutCustomersInput";
import { ContactUpdateManyWithoutCustomersInput } from "./ContactUpdateManyWithoutCustomersInput";
import { TaskUpdateManyWithoutCustomersInput } from "./TaskUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  activities?: ActivityUpdateManyWithoutCustomersInput;
  address?: string | null;
  contacts?: ContactUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  tasks?: TaskUpdateManyWithoutCustomersInput;
};
