import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Modal from "react-modal";
import { Input, InputAdornment, Button } from "@material-ui/core";

import "./Header.css";
import LoginTabs from "./LoginTabs";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      showDropdown: false,
      loginSuccess: false
    };
  }
  updateLoginSuccess = flag => {
    this.setState({ loginSuccess: flag });
  };
  toggleDropdown = () => {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }
  };
  goToProfile = () => {
    window.location = "/profile";
  };
  logout = () => {
    this.setState({ loginSuccess: false });
    window.location = "/";
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    const { modalIsOpen, showDropdown, loginSuccess } = this.state;
    const { detailsPageHeader } = this.props;
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "25%"
      }
    };
    return (
      <div className="header">
        <FastfoodIcon className="white-icon" />
        {!detailsPageHeader ? (
          <Input
            id="username"
            type="search"
            className="search-restaurant"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon className="white-icon" />
              </InputAdornment>
            }
            placeholder="Search by Restaurant Name"
            //   onChange={e => this.handleChange(e)}
          />
        ) : null}
        {loginSuccess ? (
          <>
            <div className="pic-wrapper" onClick={this.toggleDropdown}>
              <AccountCircle />
              <span>&nbsp;UpGrad</span>
            </div>
            {showDropdown ? (
              <div className="dropdown">
                <p className="option account" onClick={this.goToProfile}>
                  My Profile
                </p>
                <p className="option logout" onClick={this.logout}>
                  Logout
                </p>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="default"
              onClick={this.openModal}
              className="header-login-btn"
            >
              <AccountCircle />
              &nbsp;Login
            </Button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              ariaHideApp={false}
            >
              <LoginTabs loginFlag={this.updateLoginSuccess} />
            </Modal>
          </>
        )}
      </div>
    );
  }
}

export default Header;
