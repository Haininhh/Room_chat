import React from "react";
import loupe from "../../assets/png/loupe.png";
import more from "../../assets/png/more.png";
import add from "../../assets/png/add.png";
import downArrow from "../../assets/png/down-arrow.png";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  roomList: [];
  activeId: number;
}

const ListRoomChat = ({ roomList, activeId }: Props) => {
  const roomList = useSelector((state) => state.room.list);
  const activeId = useSelector((state) => state.room.activeId);

  const dispatch = useDispatch();

  const handleAddRoomClick = () => {
    const newRoom = {
      id: id,
      title: `Room ${id}`,
    };
    const action = addNewRoom(newRoom);
    dispatch(action);
  };

  const handleRoomClick = (room) => {
    const action = setActiveRoom(room);
    dispatch(action);
  };

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
            {roomList.map((room) => (
              <li
                key={room.id}
                className="roomlist__item-name"
                onClick={() => handleAddRoomClick(room)}
              >
                {room.title}
              </li>
            ))}
            <button className="roomlist__item-add d-flex align-center">
              <span className="roomlist__item-add-btn">
                <img src={add} alt="add" />
              </span>
              <span>Thêm phòng</span>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ListRoomChat;
