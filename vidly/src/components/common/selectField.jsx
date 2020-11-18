import React from "react";
import PropTypes from "prop-types";

const SelectField = ({ name, label, options, onChange, error, rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        {...rest}
        className="custom-select"
      >
        {options.map((o) => (
          <option key={o._id} _id={o._id} selected={o.selected}>
            {o.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default SelectField;
