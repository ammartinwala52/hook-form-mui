import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";

const MuiDatePicker = (props) => {
  const { name, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  return (
    <React.Fragment>
      <KeyboardDatePicker
        format="DD-MM-YYYY"
        fullWidth={true}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        error={isError}
        helperText={errorMessage}
        {...props}
      />
    </React.Fragment>
  );
};

function FormDatePicker(props) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Controller
          as={MuiDatePicker}
          name={name}
          control={control}
          label={label}
          defaultValue={null}
          {...props}
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

export default FormDatePicker;
