import React from "react";
import loupe from "../../../assets/png/loupe.png";
import edit from "../../../assets/png/edit.png";
import more from "../../../assets/png/more.png";
import add from "../../../assets/png/add.png";
import downArrow from "../../../assets/png/down-arrow.png";
import { Button } from "react-bootstrap";
import AddRoomChat from "./AddRoomChat";

// import { useDispatch, useSelector } from "react-redux";
// import { addNewRoomList } from "../../../actions/roomList";

// interface Props {
//   roomList: [];
// }

const ListRoomChat = (/* { roomList }: Props */) => {
  // const roomList = useSelector((state) => state.room.list);
  // const activeId = useSelector((state) => state.room.activeId);
  const [modalShow, setModalShow] = React.useState<Boolean>(false);

  return (
    <>
      <div className="list__top">
        <div className="list__top-container">
          <div className="list__top-title d-flex justify-between align-center">
            <h3 className="font-weight-bold mb-0">Chat</h3>
            <button className="list__top-title__btn w-h-36px">
              <span>
                <img className="list__top-edit" src={edit} alt="edit" />
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
      <div className="list__bottom">
        <div className="list__bottom-container">
          <h5 className="list__bottom-roomlist">
            Danh sách các phòng{" "}
            <span>
              <img src={downArrow} alt="downArrow" />
            </span>
          </h5>
          <ul className="list__bottom-roomlist__item">
            <li className="roomlist__item-name">#Hà Nội</li>
            <li className="roomlist__item-name">#Hải Phòng</li>
            {/* {roomList.map((room) => (
              <li className="roomlist__item-name">{room.name}</li>
            ))} */}

            <Button
              className="btn btn-primary roomlist__item-add d-flex align-center"
              variant="primary"
              onClick={() => setModalShow(true)}
            >
              <span className="roomlist__item-add-btn">
                <img src={add} alt="add" />
              </span>
              <span>Thêm phòng</span>
            </Button>

            <AddRoomChat show={modalShow} onHide={() => setModalShow(false)} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListRoomChat;
