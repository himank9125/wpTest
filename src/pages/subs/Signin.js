import React from "react";
import logo from "../images/logo.png";

export default function Signin() {
  return (
    <div className={`auth rel`}>
      <img src={logo} className={`abs abc`} />
      <h2 className={`s16 font title`}>Sign in to Whatsapp</h2>
    </div>
  );
}
