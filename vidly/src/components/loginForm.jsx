import React from "react";
import Joi from "joi-browser";
import InputField from "./common/inputField";
import Form from "./form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  onSubmit = () => {
    console.log("login");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
