import React from "react";
import "./RoomChat.css";
import ContentRoomChat from "./chat-room/ContentRoomChat/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat/InfoRoomChat";
import HeaderRoomChat from "./HeaderRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat/ListRoomChat";

const RoomChat = () => {
  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3 p-0 list-room-chat">
          <ListRoomChat />
        </div>
        <div className="col-9 p-0">
          <HeaderRoomChat />
          <div className="header__roomchat-container d-flex">
            <div className="w-70">
              <ContentRoomChat />
            </div>
            <div className="w-30">
              <InfoRoomChat />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="modal-dialog modal-dialog-centered">
        <div className="modal" tabIndex={-1}></div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tạo phòng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Tên phòng</label>
                <input
                  type="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nhập tên phòng"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mô tả</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Nhập mô tả"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              // onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={handleOk}
            >
              Ok
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RoomChat;
