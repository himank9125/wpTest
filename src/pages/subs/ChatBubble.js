import React from "react";

export default function ChatBubble(props) {
  return (
    <div className={`bubble flex rel ${props.dir == 0 ? "mine" : ""}`}>
      <div className={`ballon rel `}>
        <h2 className={`user s13 b`}>Himanshu Singh </h2>
        <p className={`text s13`}>
          message is going here message is going here{" "}
        </p>
        <h2 className={`stamp s11 c777 abs`}>03:22 AM</h2>
      </div>
    </div>
  );
}
