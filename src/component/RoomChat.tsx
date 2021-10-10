import React from "react";
import "./RoomChat.css";
import ContentRoomChat from "./chat-room/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat";
import HeaderRoomChat from "./HeaderRoomChat";

const RoomChat = () => {
  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3 p-0 list-room-chat">
          <ListRoomChat />
        </div>
        <div className="col-9 p-0">
          <HeaderRoomChat />
          <div className="header__roomchat-container d-flex align-center">
            <div className="w-70">
              <ContentRoomChat />
            </div>
            <div className="w-30">
              <InfoRoomChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
