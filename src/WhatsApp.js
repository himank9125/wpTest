import "./css/App.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Messenger from "./pages/Messenger";
import { useSelector } from "react-redux";
import Signin from "./pages/Signin";

export default function WhatsApp() {
  const load = useSelector((state) => state.myReducer);

  return (
    <BrowserRouter>{load.session ? <Messenger /> : <Signin />}</BrowserRouter>
  );
}
