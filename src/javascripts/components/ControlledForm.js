import React, { PropTypes } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import ValidationErrorMessage from "./ValidationErrorMessage";
import { getColorFromError } from "../helpers";

const ControlledForm = ({
  onSubmit,
  onChangeEmail,
  onChangePassword,
  onChangeURL,
  success,
  errors,
  exampleEmail,
  examplePassword,
  exampleURL,
  isSubmitted
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <SuccessMessage success={success} />
      <ErrorMessage errors={errors} isSubmitted={isSubmitted} />

      <FormGroup color={getColorFromError(errors.exampleEmail)}>
        <Label for="exampleEmail">Email</Label>
        <Input
          state={getColorFromError(errors.exampleEmail)}
          name="exampleEmail"
          value={exampleEmail}
          onChange={onChangeEmail}
        />
        <ValidationErrorMessage message={errors.exampleEmail} />
      </FormGroup>

      <FormGroup color={getColorFromError(errors.examplePassword)}>
        <Label for="examplePassword">Password</Label>
        <Input
          state={getColorFromError(errors.examplePassword)}
          name="examplePassword"
          value={examplePassword}
          onChange={onChangePassword}
        />
        <ValidationErrorMessage message={errors.examplePassword} />
      </FormGroup>

      <FormGroup color={getColorFromError(errors.exampleURL)}>
        <Label for="exampleURL">URL</Label>
        <Input
          state={getColorFromError(errors.exampleURL)}
          name="exampleURL"
          value={exampleURL}
          onChange={onChangeURL}
        />
        <ValidationErrorMessage message={errors.exampleURL} />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
};

ControlledForm.propTypes = {
  onSubmit: PropTypes.func,
  success: PropTypes.bool,
  errors: PropTypes.object
};

ControlledForm.defaultProps = {
  errors: {}
};

export default ControlledForm;
