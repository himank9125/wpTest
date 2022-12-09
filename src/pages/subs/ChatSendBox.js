import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ChatSendBox() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const sendData = (evt) => {
    if (evt.key === "Enter") {
      dispatch({ type: "send", msg: msg });
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
