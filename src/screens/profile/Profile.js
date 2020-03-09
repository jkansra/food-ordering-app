import React from "react";

const Profile = () => {
  if (!sessionStorage.getItem("loginSuccess")) {
    window.location = "/";
    return;
  }
  return <p>Profile Page</p>;
};

export default Profile;
