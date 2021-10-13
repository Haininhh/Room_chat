import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import bell from "../assets/png/bell.png";
import facetime from "../assets/png/facetime-button.png";
import loupe from "../assets/png/loupe.png";
import more from "../assets/png/more.png";
import phone from "../assets/png/phone-call.png";
import { auth } from "../config/FirebaseConfig";

const HeaderRoomChat = () => {
  const history = useHistory();
  const user = useSelector((state) => state);
  console.log(user);
  return (
    <div className="header__roomchat">
      <div className="header__roomchat-container">
        <div className="header__roomchat-user d-flex justify-between align-center">
          <h4 className="header__roomchat-name mb-0">Hải Ninh</h4>
          <button onClick={() => signOut(auth).then(() => history.push("/"))}>
            Đăng xuất
          </button>
          <div className="header__roomchat-feature d-flex">
            <button className="color-grey header__roomchat-btn-user">
              <i className="fas fa-user-plus color-grey"></i>Thêm người
            </button>
            <button>
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
