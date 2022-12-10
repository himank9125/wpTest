import React from "react";
import { useSelector } from "react-redux";
import ChatHead from "./subs/ChatHead";
import ChatMessages from "./subs/ChatMessages";
import ChatSendBox from "./subs/ChatSendBox";

export default function Chatbox() {
  const selector = useSelector((state) => state.myReducer);
  const data = useSelector((state) => state.chatReducer);
  return (
    <div className={`chatbox rel flex col`}>
      <ChatHead data={selector.activeuser} />
      <ChatMessages data={data.chats} />
      <ChatSendBox />
    </div>
  );
}
