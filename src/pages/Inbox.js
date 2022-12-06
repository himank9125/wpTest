import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import InboxItem from "./subs/InboxItem";
import SearchBox from "./subs/SearchBox";
import UserBox from "./subs/UserBox";

export default function Inbox() {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className={`inbox rel flex col`}>
      <UserBox />
      <SearchBox />
      <div className={`conv-list rel`}>
        {arr.map((elm) => {
          return <InboxItem />;
        })}
      </div>
    </div>
  );
}
