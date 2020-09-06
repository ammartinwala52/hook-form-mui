import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const MuiCheckbox = (props) => {
  const { label, name } = props;
  return (
    <FormControlLabel
      control={<Checkbox name={name} {...props} />}
      label={label}
    />
  );
};

function FormCheckBox(props) {
  const { control } = useFormContext();
  const { name, label } = props;
  return (
    <React.Fragment>
      <Controller
        as={MuiCheckbox}
        name={name}
        control={control}
        defaultValue={false}
        label={label}
        {...props}
      />
    </React.Fragment>
  );
}

export default FormCheckBox;
