import { Avatar } from "antd";
import React from "react";
import userAvatar from "../../../assets/png/image-avatar.png";
import { Room } from "../../../store/assign";
import { selectMember } from "../../../store/memberSlice";
import { useAppSelector } from "../../../store/store";

interface Props {
  selectedRoom: Room | undefined;
}

const InfoRoomChat = ({ selectedRoom }: Props) => {
  const members = useAppSelector(selectMember);

  return (
    <div className="room__info">
      <h5 className="room__info-about color-grey">Thông tin</h5>
      <div className="room__info-description">
        <h6 className="color-grey mb-0">Mô tả</h6>
        {selectedRoom ? (
          <>
            <p key={selectedRoom.id}>{selectedRoom.description}</p>
            <p className="header__roomchat-name mb-10px">
              Members ({selectedRoom.members.length})
            </p>
          </>
        ) : (
          <></>
        )}
        {members ? (
          members.map((member) => (
            <div key={member.uid}>
              <div className="message__user-info mb-10px d-flex align-center">
                <div className="message__avatar avatar__info">
                  <Avatar
                    size="small"
                    src={member.photoURL ? member.photoURL : userAvatar}
                  >
                    {member.photoURL ? member.photoURL : userAvatar}
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
