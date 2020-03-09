import * as React from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
  Snackbar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: "",
      password: "",
      emptyContact: false,
      emptyPassword: false,
      invalidContact: false,
      loginError: false,
      loinErrorMsg: "",
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
  handleClick = () => {
    const { contact, password, invalidContact } = this.state;
    if (contact !== "" || password !== "") {
      this.setState({
        emptyContact: false,
        emptyPassword: false
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
    if (contact !== "" && password !== "" && !invalidContact) {
      const dataString = btoa(contact + ":" + password);

      fetch("http://localhost:8080/api/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: dataString
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.status) {
            console.log("Success:", data);
            this.setState({
              loginError: false,
              loginErrorMsg: "",
              showSnackbar: true
            });
            this.props.loginFlag(true);
          } else if (data.message) {
            console.error("Error:", data.message);
            this.setState({
              loginError: true,
              loginErrorMsg: data.message,
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
      invalidContact,
      showSnackbar,
      loginError,
      loginErrorMsg
    } = this.state;
    return (
      <>
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
          </FormControl>
          {loginError ? <span className="error">{loginErrorMsg}</span> : null}
          <Button
            variant="contained"
            color="primary"
            className="login-btn m1"
            onClick={this.handleClick}
          >
            LOGIN
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
          message="Logged in successfully!"
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
