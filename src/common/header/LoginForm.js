import * as React from "react";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: "",
      password: "",
      validateCredentials: true,
      emptyContact: false,
      emptyPassword: false,
      invalidContact: false
    };
  }
  handleChange(e, type) {
    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState);
  }
  handleClick = () => {
    const user = "user";
    const pwd = "user";
    const { contact, password } = this.state;
    if (contact !== "" || password !== "") {
      this.setState({
        emptyContact: false,
        emptyPassword: false,
        validateCredentials: true
      });
      if (contact === "") {
        this.setState({ emptyContact: true });
      }
      if (password === "") {
        this.setState({ emptyPassword: true });
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
        emptyContact: true,
        emptyPassword: true,
        invalidContact: false
      });
      return;
    }
    // if (contact === user && password === pwd) {
    //   this.setState({ validateCredentials: true });
    //   sessionStorage.setItem(
    //     "accessToken",
    //     "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784"
    //   );
    //   window.location = "/home";
    // } else {
    //   this.setState({ validateCredentials: false });
    // }
  };
  render() {
    const {
      validateCredentials,
      emptyContact,
      emptyPassword,
      invalidContact
    } = this.state;
    return (
      <div className="login-wrapper">
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="contact">Contact No. *</InputLabel>
          <Input
            id="contact"
            onChange={e => this.handleChange(e, "contact")}
            inputProps={{ maxLength: 10 }}
          />
          {emptyContact ? <span className="error">required</span> : null}
          {invalidContact ? (
            <span className="error">Invalid Contact</span>
          ) : null}
        </FormControl>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel htmlFor="password">Password *</InputLabel>
          <Input
            id="password"
            type="password"
            onChange={e => this.handleChange(e, "password")}
          />
          {emptyPassword ? <span className="error">required</span> : null}
          {!validateCredentials ? (
            <span className="error">Incorrect contact and/or password</span>
          ) : null}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className="login-btn m1"
          onClick={this.handleClick}
        >
          LOGIN
        </Button>
      </div>
    );
  }
}
