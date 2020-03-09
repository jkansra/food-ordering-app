import * as React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  IconButton,
  Button,
  Snackbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      password: "",
      emptyFirstName: false,
      emptyEmail: false,
      emptyContact: false,
      emptyPassword: false,
      invalidEmail: false,
      invalidPassword: false,
      invalidContact: false,
      signupError: false,
      signupErrorMsg: "",
      showSnackbar: false
    };
  }
  handleClose = () => {
    this.setState({ showSnackbar: false });
  };
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
    const {
      firstName,
      lastName,
      email,
      contact,
      password,
      invalidEmail,
      invalidContact,
      invalidPassword
    } = this.state;
    if (firstName !== "" || email !== "" || contact !== "" || password !== "") {
      this.setState({
        emptyFirstName: false,
        emptyEmail: false,
        emptyContact: false,
        emptyPassword: false
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
      } else if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
        )
      ) {
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
    if (
      firstName !== "" &&
      email !== "" &&
      contact !== "" &&
      password !== "" &&
      !invalidEmail &&
      !invalidContact &&
      !invalidPassword
    ) {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        contact_number: contact,
        password: password
      };

      fetch("http://localhost:8080/api/customer/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            console.log("Success:", data);
            this.setState({
              signupError: false,
              signupErrorMsg: "",
              showSnackbar: true
            });
          } else if (data.message) {
            console.error("Error:", data.message);
            this.setState({
              signupError: true,
              signupErrorMsg: data.message,
              showSnackbar: false
            });
          }
        })
        .catch(error => {
          this.setState({
            showSnackbar: false
          });
          console.error("Error:", error);
        });
    }
  };
  render() {
    const {
      emptyContact,
      emptyPassword,
      emptyFirstName,
      emptyEmail,
      invalidEmail,
      invalidPassword,
      invalidContact,
      signupError,
      signupErrorMsg,
      showSnackbar
    } = this.state;
    return (
      <>
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
          {signupError ? <span className="error">{signupErrorMsg}</span> : null}
          <Button
            variant="contained"
            color="primary"
            className="signup-btn m1"
            onClick={this.handleClick}
          >
            SIGNUP
          </Button>
        </div>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          message="Registered successfully! Please login now!"
          action={
            <React.Fragment>
              <IconButton
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        ></Snackbar>
      </>
    );
  }
}
