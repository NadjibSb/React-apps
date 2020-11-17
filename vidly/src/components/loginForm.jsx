import React, { Component } from "react";
import Joi from "joi-browser";
import InputField from "./common/inputField";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
  };

  validateForm = () => {
    const errors = {};
    const results = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(results);

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

  onChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMsg = this.validateProperty(input);
    if (errorMsg) errors[input.name] = errorMsg;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <InputField
              name="username"
              label="Username"
              value={account.username}
              type="text"
              onChange={this.onChange}
              error={errors.username}
            />
            <InputField
              name="password"
              label="Password"
              value={account.password}
              type="password"
              onChange={this.onChange}
              error={errors.password}
            />
            <button disabled={this.validateForm()} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
