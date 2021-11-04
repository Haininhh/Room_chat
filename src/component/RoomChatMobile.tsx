import { useState } from "react";
import { Route, Switch } from "react-router-dom";
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
    <>
      <ListRoomChat
        getSelectRoom={setSelectedRoom}
        setMembers={setMembers}
        setShowRoomChat={setShowRoomChat}
      />
      <ContainerRoomChat
        selectedRoom={selectedRoom}
        members={members}
        showRoomChat={showRoomChat}
      />
      <Switch>
        <Route path="/:room" component={ContainerRoomChat} />
      </Switch>
    </>
  );
};

export default RoomChatMobile;
