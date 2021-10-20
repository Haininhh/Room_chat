import React from "react";
import { SelectRoom } from "../../RoomChat";

const InfoRoomChat = (selectedRoom: SelectRoom) => {
  console.log(selectedRoom.description);
  return (
    <div className="room__info">
      <h5 className="room__info-about">Thông tin</h5>
      <div className="room__info-description">
        <h6>Mô tả</h6>
        {/* <p className="mb-0" key={selectedRoom.selectedRoom.id}>
          {selectedRoom.selectedRoom.description}
        </p> */}
      </div>
    </div>
  );
};

export default InfoRoomChat;
