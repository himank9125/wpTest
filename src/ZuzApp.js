import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Messenger from "./pages/Messenger";
import Splash from "./pages/Splash";
import { useDispatch, useSelector } from "react-redux";
import Signin from "./pages/Signin";

export default function ZuzApp() {
  const load = useSelector((state) => state.myReducer);
  // const dispatch = useDispatch();
  // setTimeout(() => {
  //   dispatch({ type: "update" });
  // }, 1000);
  console.log(`ZuzApp${load}`);
  return (
    <BrowserRouter>
      {/* {load.loaded ? (
        <Routes>
          <Route
            exact
            path="/"
            render={load.session ? <Messenger /> : <Signin />}
          />
        </Routes>
      ) : (
        <Splash />
      )} */}
      {/* <Signin /> */}
      <Messenger />
    </BrowserRouter>
  );
}
