import { collection, query } from "@firebase/firestore";
import { getDocs, where } from "firebase/firestore";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import add from "../../../assets/png/add.png";
import downArrow from "../../../assets/png/down-arrow.png";
import edit from "../../../assets/png/edit.png";
import loupe from "../../../assets/png/loupe.png";
import more from "../../../assets/png/more.png";
import { db } from "../../../config/FirebaseConfig";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import AddRoomChat from "./AddRoomChat";

const ListRoomChat = () => {
  const [modalShow, setModalShow] = React.useState<Boolean>(false);
  const user = useAppSelector(selectUser);
  const { uid } = user;

  // const rooms = useFirestore({
  //   fieldName: "members",
  //   opStr: "array-contains",
  //   value: uid,
  // });

  const getRooms = async () => {
    let collectionRef = query(
      collection(db, "rooms"),
      where("description", "==", "Hà Nội")
    );
    const querySnapshot = await getDocs(collectionRef);
    console.log(querySnapshot);
  };
  getRooms();

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
            {/* {querySnapshot.forEach((room) => (
              <li className="roomlist__item-name" key={room.id}>
                {room.name}
              </li>
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
