import React from "react";
import ChatBubble from "./ChatBubble";

export default function ChatMessages() {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className={`chat rel flex col`}>
      {arr.map((elm, idx) => {
        return <ChatBubble dir={idx % 2} />;
      })}
    </div>
  );
}
