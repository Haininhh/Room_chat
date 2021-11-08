import { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";
import ContainerRoomChat from "./chat-room/ContainerRoomChat";
import "./chatRoom.css";
import ListRoomChat from "./ListRoomChat/ListRoomChat";
import { SelectedRoom } from "./RoomChat";

const RoomChatMobile = () => {
  const [showRoomChat, setShowRoomChat] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<SelectedRoom | undefined>(
    undefined
  );
  const [members, setMembers] = useState<any[]>([]);
  return (
    <div>
      <ListRoomChat
        getSelectRoom={setSelectedRoom}
        setMembers={setMembers}
        setShowRoomChat={setShowRoomChat}
        members={members}
        showRoomChat={showRoomChat}
      />
    </div>
  );
};

export default RoomChatMobile;
