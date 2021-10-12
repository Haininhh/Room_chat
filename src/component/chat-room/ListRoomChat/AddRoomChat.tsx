import React from "react";
import { useDispatch } from "react-redux";
import { addNewRoomList } from "../../../actions/roomList";

export interface NewRoom {
  name: string;
  description: string;
}

const AddRoomChat = ({ name, description }: NewRoom) => {
  const dispatch = useDispatch();

  const handleOk = () => {
    const newRoom = {
      name: name,
      description: description,
    };
    const action = addNewRoomList(newRoom);
    dispatch(action);
  };

  const handleCancel = () => {
    //reset form value
  };
  return (
    <div>
      <div className="modal" /* tabindex="-1" */>
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
                  id="exampleFormControlTextarea1" /* rows="3" */
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
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOk}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoomChat;
