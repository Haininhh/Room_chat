import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import ContainerRoomChat from "./chat-room/ContainerRoomChat";
import "./chatRoom.css";
import ListRoomChat from "./ListRoomChat/ListRoomChat";
import { SelectedRoom } from "./RoomChat";

const ModalSwitch = () => {
  return (
    <Router>
      <RoomChatMobile />
    </Router>
  );
};

const RoomChatMobile = () => {
  const [showRoomChat, setShowRoomChat] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<SelectedRoom | undefined>(
    undefined
  );
  const [members, setMembers] = useState<any[]>([]);
  const [listRoom, setListRoom] = useState<any[]>([]);
  const location: any = useLocation();
  const room = location.state && location.state.room;
  return (
    <div>
      <Switch location={room || location}>
        <Route
          path="/"
          children={
            <ListRoomChat
              getSelectRoom={setSelectedRoom}
              setMembers={setMembers}
              setShowRoomChat={setShowRoomChat}
              setListRoom={setListRoom}
              listRoom={listRoom}
            />
          }
        />
        <Route
          path="/room-chat/:id"
          children={
            <ContainerRoomChat
              selectedRoom={selectedRoom}
              members={members}
              showRoomChat={showRoomChat}
              listRoom={listRoom}
            />
          }
        />
      </Switch>
    </div>
  );
};

export default ModalSwitch;
