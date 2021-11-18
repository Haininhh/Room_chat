import React, { useState } from "react";
import { Room } from "../../store/assign";
import ContainerRoomChat from "../RoomChatDesktop/ContainerRoomChat/ContainerRoomChat";
import ListRoomChat from "../RoomChatDesktop/ListRoomChat/ListRoomChat";

const RoomChatDesktop = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);
  const [showRoomChat, setShowRoomChat] = useState(false);

  return (
    <div className="container container__desktop max-width-100">
      <div className="row">
        <div className="col-3 w-30-lg p-0 list-room-chat">
          <ListRoomChat
            setSelectRoom={setSelectedRoom}
            setShowRoomChat={setShowRoomChat}
          />
        </div>
        <div className="w-70-lg col-xs-12 col-9 p-0">
          <ContainerRoomChat
            selectedRoom={selectedRoom}
            showRoomChat={showRoomChat}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomChatDesktop;
