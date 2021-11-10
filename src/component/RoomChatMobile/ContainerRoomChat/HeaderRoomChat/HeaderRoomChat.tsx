import { Avatar, Tooltip } from "antd";
import { Link } from "react-router-dom";
import bell from "../../../../assets/png/bell.png";
import facetime from "../../../../assets/png/facetime-button.png";
import loupe from "../../../../assets/png/loupe.png";
import more from "../../../../assets/png/more.png";
import phone from "../../../../assets/png/phone-call.png";
import backarrow from "../../../../assets/png/back-arrow.png";
import userAvatar from "../../../../assets/png/image-avatar.png";
import { SelectedRoom } from "../../../RoomChat";

interface Props {
  members: any[] | undefined;
  selectedRoom: SelectedRoom | undefined;
}

const HeaderRoomChat = ({ selectedRoom, members }: Props) => {
  return (
    <div className="header__roomchat">
      <div className="header__roomchat-container">
        <div className="header__roomchat-user d-flex justify-between align-center">
          <div className="header__roomchat-user-info d-flex align-center">
            <Link to="/room-chat">
              <span id="cancel_reset">
                <img src={backarrow} alt="back-arrow" />
              </span>
            </Link>
            {members && members.length >= 2 ? (
              <div className="avatar__group d-inline-block w-69px">
                <Avatar.Group size="small" maxCount={2}>
                  {members ? (
                    members.map((member) => (
                      <Tooltip
                        title="A"
                        className="avatar__group-a"
                        key={member.uid}
                      >
                        <Avatar
                          src={member.photoURL ? member.photoURL : userAvatar}
                        >
                          {member.displayName
                            ? member.displayName
                            : member.email.charAt(0).toUpperCase()}
                        </Avatar>
                      </Tooltip>
                    ))
                  ) : (
                    <></>
                  )}
                </Avatar.Group>
              </div>
            ) : (
              <div className="avatar__group d-inline-block w-36px">
                <Avatar.Group size="small" maxCount={2}>
                  {members ? (
                    members.map((member) => (
                      <Tooltip
                        title="A"
                        className="avatar__group-a"
                        key={member.uid}
                      >
                        <Avatar
                          src={member.photoURL ? member.photoURL : userAvatar}
                        >
                          {member.displayName
                            ? member.displayName
                            : member.email.charAt(0).toUpperCase()}
                        </Avatar>
                      </Tooltip>
                    ))
                  ) : (
                    <></>
                  )}
                </Avatar.Group>
              </div>
            )}
            <div className="header__user-info">
              {selectedRoom ? (
                <>
                  <h6 className="mb-0" key={selectedRoom.id}>
                    {selectedRoom.name}
                  </h6>
                  <p className="header__roomchat-name mb-0">
                    Members: {selectedRoom.members.length}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="header__roomchat-feature d-flex">
            <button className="color-grey header__roomchat-btn-user">
              <i className="fas fa-user-plus color-grey"></i>Thêm người
            </button>
            <button className="btn-user__bell">
              <span className="pd-feature-btn d-inline-block">
                <img src={bell} alt="bell" />
              </span>
            </button>
            <button>
              <span className="pd-feature-btn d-inline-block">
                <img src={phone} alt="phone" />
              </span>
            </button>
            <button>
              <span className="pd-feature-btn d-inline-block">
                <img src={facetime} alt="facetime" />
              </span>
            </button>
            <button>
              <span className="pd-feature-btn d-inline-block">
                <img src={more} alt="more" />
              </span>
            </button>
          </div>
        </div>
        <div className="header__roomchat-search">
          <div className="d-flex align-center">
            <div className="w-70 d-flex align-center mr-4px">
              <p className="mb-0 pd-10-15">Chat</p>
              <p className="mb-0 pd-10-15">File</p>
            </div>
            <div className="w-30">
              <div className="list__top-search">
                <span>
                  <img src={loupe} alt="loupe" />
                </span>
                <input
                  className="list__top-search__content"
                  type="text"
                  placeholder="Search Workplace Chat..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRoomChat;
