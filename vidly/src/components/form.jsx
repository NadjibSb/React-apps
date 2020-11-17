import React, { Component } from "react";
import Joi from "joi-browser";
import InputField from "./common/inputField";

class Form extends Component {
  state = { data: {}, errors: {} };
  shcema = {};

  validateForm = () => {
    const results = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    //console.log(results);

    const errors = {};
    if (!results.error) return null;
    for (let item of results.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    this.onSubmit();
  };

  renderInput = (name, label, type) => {
    return (
      <InputField
        name={name}
        label={label}
        value={this.state.data[name]}
        type={type}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  };

  renderButton = (label) => {
    return (
      <button disabled={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default Form;
