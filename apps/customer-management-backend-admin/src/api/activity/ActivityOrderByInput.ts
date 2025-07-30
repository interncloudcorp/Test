import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
