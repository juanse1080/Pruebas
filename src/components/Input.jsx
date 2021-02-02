import React from "react";

import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";

const Input = ({ value, onChange, type, name, label }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      type={type}
      variant="outlined"
      size="small"
      name={name}
      label={label}
      fullWidth
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
