import React from "react";

const ListRoomChat = () => {
  return (
    <div className="list__top">
      <div className="list__top-title d-flex justify-between">
        <h3 className="font-weight-bold">Chat</h3>
        <button className="list__top-title__btn">
          <span>
            <i className="far fa-edit"></i>
          </span>
        </button>
      </div>
      <div className="list__top-nav d-flex justify-between">
        <button className="list__top-nav__btn">Tất cả</button>
        <button className="list__top-nav__btn">Chưa đọc</button>
        <button className="list__top-nav__btn btn-list__top-more">...</button>
      </div>
    </div>
  );
};

export default ListRoomChat;
