import React from "react";
import { BrowserRouter } from "react-router-dom";
import Messenger from "./pages/Messenger";
import Splash from "./pages/Splash";
import { connect, useDispatch, useSelector } from "react-redux";

export default function ZuzApp(props) {
  const loaded = useSelector((state) => state.myReducer.loaded);
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch({ type: "update" });
  }, 1000);

  return <BrowserRouter>{loaded ? <Messenger /> : <Splash />}</BrowserRouter>;
}
