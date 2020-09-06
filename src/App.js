import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import FormInput from "./controls/input";
import FormSelect from "./controls/select";
import FormSelectAutoComplete from "./controls/select-autocomplete";
import FormDatePicker from "./controls/datepicker";
import FormCheckbox from "./controls/checkbox";
import FormRadio from "./controls/radio";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const validationSchema = yup.object().shape({
  nameV: yup.string().required("Name Validation Field is Required"),
  selV: yup.string().required("Select Validation Field is Required"),
  selAutoV: yup.array().required("Multi Select Validation Field required"),
  txtDateV: yup
  .date()
  .typeError("Mui Date field must be a date")
  .required("Mui Date field is required"),
});

function App(props) {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  const numberData = [
    {
      id: "10",
      label: "Ten",
    },
    {
      id: "20",
      label: "Twenty",
    },
    {
      id: "30",
      label: "Thirty",
    },
  ];

  const radioGroupOptions = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </Button>

      <div style={{ padding: "10px" }}>
        <FormProvider {...methods}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormInput name="name" label="Name" />
              </Grid>
              <Grid item xs={6}>
                <FormInput
                  name="nameV"
                  label="Name with Validation"
                  required={true}
                  errorobj={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <FormSelect name="sel" label="Numbers" options={numberData} />
              </Grid>
              <Grid item xs={6}>
                <FormSelect
                  name="selV"
                  label="Numbers with Validation"
                  options={numberData}
                  required={true}
                  errorobj={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <FormSelectAutoComplete
                  name="selAuto"
                  label="Auto Select Numbers"
                  options={numberData}
                  isMulti
                />
              </Grid>
              <Grid item xs={6}>
                <FormSelectAutoComplete
                  name="selAutoV"
                  label="Auto Select Numbers with Validation"
                  options={numberData}
                  isMulti
                  required={true}
                  errorobj={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <FormDatePicker name="txtDate" label="Mui Date" />
              </Grid>
              <Grid item xs={6}>
                <FormDatePicker
                  name="txtDateV"
                  label="Mui Date Validation"
                  required={true}
                  errorobj={errors}
                />
              </Grid>
              <Grid item xs={6}>
                <FormCheckbox name="chk" label="Mui Checkbox" />
              </Grid>
              <Grid item xs={6}>
                <FormRadio
                  name="gender"
                  label="Gender"
                  options={radioGroupOptions}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default App;
