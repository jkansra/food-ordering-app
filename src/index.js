import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";
import Details from "./screens/details/Details";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
    <Route path="/details" component={Details} />
  </Router>,
  document.getElementById("root")
);
