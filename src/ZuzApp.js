import React from "react";
import { BrowserRouter } from "react-router-dom";
import Messenger from "./pages/Messenger";
import Splash from "./pages/Splash";
import { useDispatch, useSelector } from "react-redux";

export default function ZuzApp() {
  const load = useSelector((state) => state.myReducer);
  // const dispatch = useDispatch();
  // setTimeout(() => {
  //   dispatch({ type: "update" });
  // }, 1000);
  console.log(`ZuzApp${load}`);
  return (
    <BrowserRouter>{load.loaded ? <Messenger /> : <Splash />}</BrowserRouter>
  );
}
