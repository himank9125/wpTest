import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chatbox from "./ChatBox";
import Inbox from "./Inbox";

export default function Messenger() {
  const selector = useSelector((state) => state.myReducer);
  let sending = () => {
    let url = "https://whatsapp-7547d-default-rtdb.firebaseio.com/users.json";
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ users: selector.users }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    sending();
  }, []);
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
