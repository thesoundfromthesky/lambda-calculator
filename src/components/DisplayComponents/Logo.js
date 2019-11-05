import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

import "./display.scss";

const Logo = () => {
  return (
    <div className="logo-container sync-logo center">
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
