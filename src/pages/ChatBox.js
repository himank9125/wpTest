import React from "react";
import { useSelector } from "react-redux";
import ChatHead from "./subs/ChatHead";
import ChatMessages from "./subs/ChatMessages";
import ChatSendBox from "./subs/ChatSendBox";

export default function Chatbox() {
  const data = useSelector((state) => state.chatReducer);
  return (
    <div className={`chatbox rel flex col`}>
      <ChatHead data={data.user} />
      <ChatMessages data={data} />
      <ChatSendBox />
    </div>
  );
}
