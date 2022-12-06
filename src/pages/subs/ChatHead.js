import React from "react";
import { Link } from "react-router-dom";

export default function ChatHead() {
  return (
    <div className={`chathead flex`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img src="https://placeimg.com/50/50/people" />
        </Link>
      </div>
      <div className={`actions rel flex aic`}>
        <button className={`icon-chat s24`} />
        <button className={`icon-more_vert s24`} />
      </div>
    </div>
  );
}