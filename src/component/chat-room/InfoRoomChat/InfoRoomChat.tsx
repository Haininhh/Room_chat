import React from "react";

const InfoRoomChat = (selectedRoom: any) => {
  return (
    <div className="room__info">
      <h5 className="room__info-about color-grey">Thông tin</h5>
      <div className="room__info-description">
        <h6 className="color-grey">Mô tả</h6>
        {selectedRoom.selectedRoom ? (
          <p className="mb-0" key={selectedRoom.selectedRoom.id}>
            {selectedRoom.selectedRoom.description}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InfoRoomChat;
