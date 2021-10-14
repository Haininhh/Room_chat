import React from "react";
import "./chatRoom.css";
import ContentRoomChat from "./chat-room/ContentRoomChat/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat/InfoRoomChat";
import HeaderRoomChat from "./HeaderRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat/ListRoomChat";

const RoomChat = () => {
  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3 p-0 list-room-chat">
          <ListRoomChat />
        </div>
        <div className="col-9 p-0 height-100vh">
          <HeaderRoomChat />
          <div className="content__roomchat-container d-flex ">
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
