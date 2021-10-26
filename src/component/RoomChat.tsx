import { useState } from "react";
import ContentRoomChat from "./chat-room/ContentRoomChat/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat/InfoRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat/ListRoomChat";
import "./chatRoom.css";
import HeaderRoomChat from "./HeaderRoomChat";

export type SelectedRoom = {
  name: string;
  description: string;
  members: string[];
  id: string;
};

const RoomChat = () => {
  const [selectedRoom, setSelectedRoom] = useState<SelectedRoom | undefined>(
    undefined
  );
  const [members, setMembers] = useState<any[] | undefined>(undefined);
  console.log(members);

  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3 p-0 list-room-chat">
          <ListRoomChat
            getSelectRoom={setSelectedRoom}
            getMembers={setMembers}
          />
        </div>
        <div className="col-9 p-0 height-100vh">
          <HeaderRoomChat selectedRoom={selectedRoom} />
          <div className="content__roomchat-container d-flex ">
            <div className="w-70">
              <ContentRoomChat />
            </div>
            <div className="w-30">
              <InfoRoomChat selectedRoom={selectedRoom} members={members} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
