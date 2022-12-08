import React from "react";
import { Link } from "react-router-dom";

export default function InboxItem(props) {
  return (
    <div key={props.idx} className={`conversation flex rel aic`}>
      <div className={`you rel flex aic`}>
        <Link className={`user`}>
          <img
            src={`https://placeimg.com/50/50/people?t=${new Date().getTime()}`}
          />
        </Link>
      </div>
      <div className={`meta rel flex aic`}>
        <div className={`info rel flex col`}>
          <h2 className={`name s14 wordwrap`}>Himanshu</h2>
          <h2 className={`last-msg s13 c333 wordwrap`}>This is message</h2>
        </div>
        <div className={`extra rel flex col aic`}>
          <h2 className={`stamp s11 c777`}>01:45 AM</h2>
          <div className={`badge rel s12 cfff`}>99+</div>
        </div>
      </div>
    </div>
  );
}
