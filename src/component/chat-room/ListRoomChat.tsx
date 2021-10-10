import React from "react";
import loupe from "../../assets/png/loupe.png";
import more from "../../assets/png/more.png";

const ListRoomChat = () => {
  return (
    <>
      <div className="list__top">
        <div className="list__top-container">
          <div className="list__top-title d-flex justify-between align-center">
            <h3 className="font-weight-bold mb-0">Chat</h3>
            <button className="list__top-title__btn w-h-36px">
              <span>
                <i className="far fa-edit"></i>
              </span>
            </button>
          </div>
          <div className="list__top-nav mb-12 d-flex align-center">
            <button className="list__top-nav__btn">Tất cả</button>
            <button className="list__top-nav__btn m-l-r-8">Chưa đọc</button>
            <button className="list__top-nav__btn btn-list__top-more w-h-36px">
              <span>
                <img src={more} alt="more" />
              </span>
            </button>
          </div>
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
      <div className="list__bot">
        <div className="list__bottom-container">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Danh sách các phòng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRoomChat;
