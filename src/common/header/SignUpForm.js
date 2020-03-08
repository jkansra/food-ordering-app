import * as React from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      password: "",
      validateCredentials: true,
      emptyFirstName: false,
      emptyEmail: false,
      emptyContact: false,
      emptyPassword: false,
      invalidEmail: false,
      invalidPassword: false,
      invalidContact: false
    };
  }
  handleChange(e, type) {
    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState);
  }
  checkEmptyValue = (value, emptyState) => {
    if (value === "") {
      this.setState({ emptyState: true });
    }
  };
  handleClick = () => {
    const user = "user";
    const pwd = "user";
    const { firstName, lastName, email, contact, password } = this.state;
    if (firstName !== "" || email !== "" || contact !== "" || password !== "") {
      this.setState({
        emptyFirstName: false,
        emptyEmail: false,
        emptyContact: false,
        emptyPassword: false,
        validateCredentials: true
      });

      if (firstName === "") {
        this.setState({ emptyFirstName: true });
      }
      if (contact === "") {
        this.setState({ emptyContact: true });
      }

      if (email === "") {
        this.setState({ invalidEmail: false, emptyEmail: true });
      } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.setState({ invalidEmail: false });
      } else {
        this.setState({ invalidEmail: true });
      }

      if (password === "") {
        this.setState({ emptyPassword: true, invalidPassword: false });
      } else if (/((?=.*\\d)(?=.*[A-Z])(?=.*[@#$%]))/.test(password)) {
        this.setState({ invalidPassword: false });
      } else {
        this.setState({ invalidPassword: true });
      }

      if (contact === "") {
        this.setState({ emptyContact: true, invalidContact: false });
      } else if (/([0-9]{10})/.test(contact)) {
        this.setState({ invalidContact: false });
      } else {
        this.setState({ invalidContact: true });
      }
    } else {
      this.setState({
        emptyFirstName: true,
        emptyEmail: true,
        emptyContact: true,
        emptyPassword: true,
        invalidEmail: false,
        invalidPassword: false,
        invalidContact: false
      });
      return;
    }
    //   if (contact === user && password === pwd) {
    //     this.setState({ validateCredentials: true });
    //     sessionStorage.setItem(
    //       "accessToken",
    //       "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784"
    //     );
    //     window.location = "/home";
    //   } else {
    //     this.setState({ validateCredentials: false });
    //   }
  };
  render() {
    const {
      validateCredentials,
      emptyContact,
      emptyPassword,
      emptyFirstName,
      emptyEmail,
      invalidEmail,
      invalidPassword,
      invalidContact
    } = this.state;
    return (
      <div className="signup-wrapper">
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="firstName">First Name *</InputLabel>
          <Input
            id="firstName"
            onChange={e => this.handleChange(e, "firstName")}
          />
          {emptyFirstName ? <span className="error">required</span> : null}
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            onChange={e => this.handleChange(e, "lastName")}
          />
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="email">Email *</InputLabel>
          <Input id="email" onChange={e => this.handleChange(e, "email")} />
          {emptyEmail ? <span className="error">required</span> : null}
          {invalidEmail ? <span className="error">Invalid Email</span> : null}
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="password">Password *</InputLabel>
          <Input
            id="password"
            type="password"
            onChange={e => this.handleChange(e, "password")}
          />
          {emptyPassword ? <span className="error">required</span> : null}
          {invalidPassword ? (
            <span className="error">
              Password must contain at least one capital letter, one small
              letter, one number, and one special character
            </span>
          ) : null}
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="contact">Contact No. *</InputLabel>
          <Input
            id="contact"
            onChange={e => this.handleChange(e, "contact")}
            inputProps={{ maxLength: 10 }}
          />
          {emptyContact ? <span className="error">required</span> : null}
          {invalidContact ? (
            <span className="error">
              Contact No. must contain only numbers and must be 10 digits long
            </span>
          ) : null}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className="signup-btn m1"
          onClick={this.handleClick}
        >
          SIGNUP
        </Button>
      </div>
    );
  }
}
