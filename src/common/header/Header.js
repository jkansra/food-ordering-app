import React from "react";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Input, InputAdornment, Button } from "@material-ui/core";
// import Modal from "react-modal";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <FastfoodIcon className="white-icon" />
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
        <Button variant="contained" color="default">
          <AccountCircle />
          &nbsp;Login
        </Button>
      </div>
    );
  }
}

export default Header;
