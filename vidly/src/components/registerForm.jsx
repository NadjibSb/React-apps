import React, { Component } from "react";
import Form from "./form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: {
      email: "",
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    username: Joi.string().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
  };

  onSubmit = () => {
    console.log("login");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email", "text")}
            {this.renderInput("username", "Username", "text")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
