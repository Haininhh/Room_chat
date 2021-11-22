import { signOut } from "@firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../../../config/FirebaseConfig";
import { Room } from "../../../../store/assign";
import { clearMember, setMember } from "../../../../store/memberSlice";
import {
  clearRoomList,
  selectRoomList,
  setRoomList,
} from "../../../../store/roomSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { selectUser } from "../../../../store/userSlice";
import add from "../../../../assets/png/add.png";
import downArrow from "../../../../assets/png/down-arrow.png";
import edit from "../../../../assets/png/edit.png";
import userAvatar from "../../../../assets/png/image-avatar.png";
import loupe from "../../../../assets/png/loupe.png";
import more from "../../../../assets/png/more.png";
import AddRoomChat from "../../Common/AddRoomChat";

interface Props {
  setSelectRoom: (param: Room) => void;
  setShowRoomChat: (param: boolean) => void;
}
export const MemberContext = createContext([]);

const ListRoomChat = ({ setSelectRoom, setShowRoomChat }: Props) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [modalShow, setModalShow] = useState<Boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  // Selector User
  const user = useAppSelector(selectUser);
  const { uid, photoURL } = user;

  // Selector List Room
  const roomList = useAppSelector(selectRoomList);
  const { rooms } = roomList;

  // Get List Room
  useEffect(() => {
    dispatch(
      clearRoomList({
        name: "",
        description: "",
        members: [],
        id: "",
      })
    );
    const getRooms = async () => {
      const collectionRef = query(
        collection(db, "rooms"),
        where("members", "array-contains", uid)
      );
      const q = query(collectionRef);
      const unsubcribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { name, description, members } = doc.data() as Room;
          const id = doc.id;
          dispatch(setRoomList({ name, description, members, id }));
        });
      });
      return () => {
        unsubcribe();
      };
    };
    getRooms();
  }, [uid, dispatch]);

  const selectedRoom: Room | undefined = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId),
    [rooms, selectedRoomId]
  );

  useEffect(() => {
    if (!selectedRoom) return;
    setSelectRoom(selectedRoom);
  });

  // GET Member from users database;
  useEffect(() => {
    dispatch(clearMember({}));
    const getMembers = async () => {
      if (!selectedRoom?.members) return;
      const q = query(
        collection(db, "users"),
        where("uid", "in", selectedRoom?.members)
      );
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { displayName, email, photoURL, providerId, uid } = doc.data();
          dispatch(
            setMember({ displayName, email, photoURL, providerId, uid })
          );
        });
      });
      return () => {
        unsubscribe();
      };
    };
    getMembers();
  }, [dispatch, selectedRoom?.members]);

  return (
    <>
      <div className="list__top">
        <div className="list__top-container">
          <div className="list__top-title d-flex justify-between align-center">
            <div className="d-flex align-center">
              <span className="list__top-title__avatar">
                <img src={photoURL ? photoURL : userAvatar} alt="" />
              </span>
              <h3 className="list__top-title__name font-weight-bold mb-0">
                Chat
              </h3>
            </div>
            <button className="list__top-title__btn w-h-36px w-h-32px w-h-28px">
              <span>
                <img
                  className="list__top-edit w-20px w-16px "
                  src={edit}
                  alt="edit"
                />
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
          <p className="list__bottom-roomlist">
            Danh sách các phòng{" "}
            <span>
              <img src={downArrow} alt="downArrow" />
            </span>
          </p>
          <ul className="list__bottom-roomlist__item">
            {/* Danh sách phòng */}
            {rooms.map((room) => (
              <li
                className="roomlist__item-name"
                key={room.id}
                onClick={() => {
                  setSelectedRoomId(room.id);
                  setShowRoomChat(true);
                }}
              >
                <Link
                  to={`/room-chat/${room.name}`}
                  style={{ textDecoration: "none" }}
                >
                  {room.name}
                </Link>
              </li>
            ))}

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
      <button
        className="header__roomchat-user__btn-logout"
        onClick={() => {
          signOut(auth).then(() => {
            history.push("/");
          });
        }}
      >
        Đăng xuất
      </button>
    </>
  );
};

export default ListRoomChat;
