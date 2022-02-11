import * as React from "react";
import { Create, SimpleForm, CreateProps } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />      
      </SimpleForm>
    </Create>
  );
};
