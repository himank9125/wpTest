import React from "react";
import ChatBubble from "./ChatBubble";

export default function ChatMessages(props) {
  const arr = props.data.chats;
  const data = props.data;
  return (
    <div className={`chat rel flex col`}>
      {arr.map((elm, idx) => {
        return <ChatBubble dir={idx % 2} elm={elm} data={data} key={idx} />;
      })}
    </div>
  );
}
