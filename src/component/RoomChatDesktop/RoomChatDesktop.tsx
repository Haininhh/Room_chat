import React, { useState } from "react";
import { SelectedRoom } from "../RoomChat";
import ContainerRoomChat from "../RoomChatDesktop/ContainerRoomChat/ContainerRoomChat";
import ListRoomChat from "../RoomChatDesktop/ListRoomChat/ListRoomChat";

const RoomChatDesktop = () => {
  const [selectedRoom, setSelectedRoom] = useState<SelectedRoom | undefined>(
    undefined
  );
  const [showRoomChat, setShowRoomChat] = useState(false);
  const [members, setMembers] = useState<any[]>([]);
  const [listRoom, setListRoom] = useState<any[]>([]);

  return (
    <div className="container container__desktop max-width-100">
      <div className="row">
        <div className="col-3 w-30-lg p-0 list-room-chat">
          <ListRoomChat
            getSelectRoom={setSelectedRoom}
            setShowRoomChat={setShowRoomChat}
            listRoom={listRoom}
            setListRoom={setListRoom}
            setMembers={setMembers}
          />
        </div>
        <div className="w-70-lg col-xs-12 col-9 p-0">
          <ContainerRoomChat
            selectedRoom={selectedRoom}
            members={members}
            showRoomChat={showRoomChat}
            listRoom={listRoom}
            setMembers={setMembers}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomChatDesktop;
