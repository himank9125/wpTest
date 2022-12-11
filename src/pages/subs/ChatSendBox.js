import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChatSendBox() {
  const selector = useSelector((state) => state.myReducer);
  const codeSent = useSelector((state) => state.chatReducer);
  const [retdata, setRetData] = useState("");
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  // ----------------------Fetching and Synching---------------------
  let fetching = () => {
    let url =
      "https://whatsapp-7547d-default-rtdb.firebaseio.com/messages.json";
    fetch(url)
      .then((elm) => elm.json())
      .then((elm) => {
        console.log("fetching", elm);
        dispatch({ type: "syncdata", data: elm });
      })
      .catch((err) => console.log(err));
  };
  let sending = () => {
    let url =
      "https://whatsapp-7547d-default-rtdb.firebaseio.com/messages.json";
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(codeSent),
    };
    console.log(requestOptions);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        fetching();
        console.log("sending Done fetching started");
      });
  };
  useEffect(() => {
    fetching();
    console.log("msg fetching");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      sending();
      console.log("msg sending");
    }, 2000);
  }, [retdata]);
  // ----------------------Fetching and Synching---------------------

  const sendData = (evt) => {
    if (evt.key === "Enter") {
      dispatch({
        type: "send",
        msg: msg,
        sender: selector.currentuser,
        receiver: selector.activeuser,
      });
      setRetData(new Date());
      setMsg("");
    }
  };
  return (
    <div className={`sendbox flex aic`}>
      <button className={`icon-insert_emoticon s24`} />
      <textarea
        className={`new-message s14 font`}
        placeholder={`type a message`}
        value={msg}
        onChange={(evt) => setMsg(evt.target.value)}
        onKeyDown={sendData}
      />
      <button className={`icon-mic s24`} />
    </div>
  );
}
