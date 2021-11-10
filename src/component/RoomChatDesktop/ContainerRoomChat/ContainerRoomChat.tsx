import React from "react";
import { SelectedRoom } from "../../RoomChat";
import ContentRoomChat from "./ContentRoomChat/ContentRoomChat";
import HeaderRoomChat from "./HeaderRoomChat/HeaderRoomChat";
import InfoRoomChat from "./InfoRoomChat/InfoRoomChat";

interface Props {
  showRoomChat: boolean;
  members: any[] | undefined;
  listRoom: any[];
  setMembers: (param: any) => void;
  selectedRoom: SelectedRoom | undefined;
}

const ContainerRoomChat = ({
  showRoomChat,
  members,
  listRoom,
  selectedRoom,
}: Props) => {
  return (
    <div className="height-100vh">
      {showRoomChat && selectedRoom ? (
        <>
          <HeaderRoomChat selectedRoom={selectedRoom} members={members} />
          <div className="content__roomchat-container d-flex">
            <div className="w-70 col-lg-12">
              <ContentRoomChat selectedRoom={selectedRoom} />
            </div>
            <div className="w-30">
              <InfoRoomChat selectedRoom={selectedRoom} members={members} />
            </div>
          </div>
        </>
      ) : (
        <div
          className="alert alert-primary d-flex align-items-center"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
            viewBox="0 0 16 16"
            role="img"
            aria-label="Warning:"
          >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <div>Hãy chọn phòng</div>
        </div>
      )}
    </div>
  );
};

export default ContainerRoomChat;
