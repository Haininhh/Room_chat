import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const MessageChat = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <div className="message">
      <div className="message__user d-flex">
        <div className="message__avatar">
          <span>{/* <img src={user.photoURL} alt="avatar" /> */}</span>
        </div>
        {/* <div className="message__name mb-0">{user.displayName}</div> */}
      </div>
      <div className="message__content">asdassd</div>
    </div>
  );
};

export default MessageChat;
