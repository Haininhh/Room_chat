import { Avatar } from "antd";
import React from "react";

interface Props {
  members: any[] | undefined;
  selectedRoom: any | undefined;
}

const InfoRoomChat = ({ selectedRoom, members }: Props) => {
  const defaultAvatar = "https://graph.facebook.com/403982431236568/picture";

  return (
    <div className="room__info">
      <h5 className="room__info-about color-grey">Thông tin</h5>
      <div className="room__info-description">
        <h6 className="color-grey">Mô tả</h6>
        {selectedRoom ? (
          <>
            <p key={selectedRoom.id}>{selectedRoom.description}</p>
            <p className="header__roomchat-name">
              Members ({selectedRoom.members.length})
            </p>
          </>
        ) : (
          <></>
        )}
        {members ? (
          members.map((member) => (
            <div key={member.uid}>
              <div className="message__user mb-10px d-flex align-center">
                <div className="message__avatar">
                  <Avatar
                    size="small"
                    src={member.photoURL ? member.photoURL : defaultAvatar}
                  >
                    {member.photoURL ? member.photoURL : defaultAvatar}
                  </Avatar>
                </div>
                <div className="member__name">
                  {member.displayName
                    ? member.displayName
                    : member.email.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default InfoRoomChat;
