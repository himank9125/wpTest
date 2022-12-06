import React from "react";

export default function ChatSendBox() {
  return (
    <div className={`sendbox flex aic`}>
      <button className={`icon-insert_emoticon s24`} />
      <textarea
        className={`new-message s14 font`}
        placeholder={`type a message`}
      />
      <button className={`icon-mic s24`} />
    </div>
  );
}
