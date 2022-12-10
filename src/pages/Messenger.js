import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chatbox from "./ChatBox";
import Inbox from "./Inbox";

export default function Messenger() {
  return (
    <>
      <div className={`green-belt`}></div>
      <div className={`messenger fixed  flex`}>
        <Inbox />
        <Chatbox />
      </div>
    </>
  );
}
