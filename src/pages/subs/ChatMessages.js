import React from "react";
import { useSelector } from "react-redux";
import ChatBubble from "./ChatBubble";

export default function ChatMessages(props) {
  const selector = useSelector((state) => state.myReducer);
  const arr = props.data;
  return (
    <div className={`chat rel flex col`}>
      {arr.map((elm, idx) => {
        return (
          <ChatBubble
            dir={elm.sender === selector.currentuser ? 0 : 1}
            elm={elm}
            key={idx}
          />
        );
      })}
    </div>
  );
}
