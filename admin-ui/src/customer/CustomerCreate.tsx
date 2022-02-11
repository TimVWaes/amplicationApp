import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="company" source="company" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
