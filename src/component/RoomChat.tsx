import React from "react";
import "./RoomChat.css";
import ContentRoomChat from "./chat-room/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat";

const RoomChat = () => {
  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3">
          <ListRoomChat />
        </div>
        <div className="col-7">
          <ContentRoomChat />
        </div>
        <div className="col-2">
          <InfoRoomChat />
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
