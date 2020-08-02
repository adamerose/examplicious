import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField, Alert, AlertTitle, Asdf
} from "@blueprintjs/core";
import { Form, Formik, useField } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import styled from "styled-components";
// Local
import * as Yup from "yup";



const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormikAutoField = ({ name, label, type, required, extraProps }) => {
  const [field, meta, helpers] = useField(name);

  if (type === "text") {
    return (
      <TextField
        id={name}
        label={label}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        required={required}
        variant="outlined"
        {...extraProps}
      />
    );
  }

  if (type === "textarea") {
    return (
      <TextField
        id={name}
        label={label}
        value={field.value}
        onBlur={field.onBlur}
        onChange={field.onChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
        required={required}
        variant="outlined"
        // All props above here above matches the text widget
        multiline
        rows={8}
      />
    );
  }

  if (type === "checkbox") {
    return (
      <FormControlLabel
        control={
          <Checkbox
            checked={field.value}
            onChange={field.onChange}
            name={name}
            color="primary"
          />
        }
        label={label}
      />
    );
  }

  throw Error(`No GenericForm UI widget found for ${type}`);
};

// Map Yup types to form input types
const uiMapper = {
  string: "text",
  boolean: "checkbox",
};

const GenericForm = ({
  validationSchema,
  uiSchema,
  extraProps,
  initialValues,
  onSubmit,
  debug,
}) => {
  const [globalErrors, setGlobalErrors] = useState([]);

  const ErrorAlert = ({ error }) => (
    <Alert severity="error" >
      <AlertTitle>{error ?.name || "Error"}</AlertTitle>
      {error ?.response ?.data ?.detail || error ?.message || "An error occured"}
    </Alert>
  );

  window.d.validationSchema = validationSchema;
  window.d.uiSchema = uiSchema;
  return (
    <>
      {globalErrors.map((error, ix) => (
        <ErrorAlert key={ix} error={error} />
      ))}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setGlobalErrors([]);

          onSubmit(values, actions).catch((error) => {
            window.error = error;
            setGlobalErrors([error]);
            actions.setSubmitting(false);
          });
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Form>
            <Flex>
              {/* Loop over validationSchema fields and auto generate formik Fields */}
              {Object.keys(validationSchema.fields).map((key, index) => {
                let field = validationSchema.describe().fields[key];
                return (
                  <FormikAutoField
                    key={key}
                    name={key}
                    required={field.tests.some((x) => x.name === "required")}
                    label={field.label}
                    type={uiSchema[key] || uiMapper[field.type]}
                    extraProps={extraProps != undefined && extraProps[key]}
                  />
                );
              })}

              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  formikProps.isSubmitting ||
                  !formikProps.isValid ||
                  !formikProps.dirty
                }
              >
                Submit
              </Button>
            </Flex>

            {debug && (
              <div>
                <hr />
                <h5>FormData</h5>
                <ReactJson
                  src={JSON.parse(JSON.stringify(formikProps))}
                  collapsed
                />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

GenericForm.propTypes = {
  validationSchema: PropTypes.objectOf(Yup.object),
  initialValues: PropTypes.object,
};

GenericForm.defaultProps = {
  debug: false,
  uiSchema: {},
};

export default GenericForm;
