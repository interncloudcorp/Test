import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tasks"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="dueDate" source="dueDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="isCompleted" source="isCompleted" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
