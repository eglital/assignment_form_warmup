import React, { PropTypes } from "react";
import { Alert } from "reactstrap";
import { isEmpty } from "../helpers";

const ErrorMessage = ({ errors, isSubmitted }) => {
  if (isEmpty(errors) || !isSubmitted) {
    return null;
  }

  return (
    <Alert color="danger">
      Oops, looks like you have some errors...
    </Alert>
  );
};

ErrorMessage.propTypes = {
  errors: PropTypes.object.isRequired
};

ErrorMessage.defaultProps = {
  errors: {}
};

export default ErrorMessage;
