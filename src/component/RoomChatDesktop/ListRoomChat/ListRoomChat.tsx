import { signOut } from "@firebase/auth";
import {
  collection,
  onSnapshot,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import add from "../../../assets/png/add.png";
import downArrow from "../../../assets/png/down-arrow.png";
import edit from "../../../assets/png/edit.png";
import userAvatar from "../../../assets/png/image-avatar.png";
import loupe from "../../../assets/png/loupe.png";
import more from "../../../assets/png/more.png";
import { auth, db } from "../../../config/FirebaseConfig";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import AddRoomChat from "../../RoomChatCommon/AddRoomChat";
import { SelectedRoom } from "../../RoomChat";

interface Props {
  getSelectRoom: (param: SelectedRoom) => void;
  setMembers: (param: any) => void;
  setShowRoomChat: (param: boolean) => void;
  setListRoom: (param: any) => void;
  listRoom: any[];
}
interface Condition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string;
}
export interface UserCondition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string[];
}

const ListRoomChat = ({
  getSelectRoom,
  setMembers,
  setShowRoomChat,
  setListRoom,
  listRoom,
}: Props) => {
  const history = useHistory();
  const [modalShow, setModalShow] = React.useState<Boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const user = useAppSelector(selectUser);
  const { uid, photoURL } = user;

  const conditionRef: Condition | null = useMemo(() => {
    return {
      fieldName: "members",
      opStr: "array-contains",
      value: uid,
    };
  }, [uid]);

  useEffect(() => {
    if (!conditionRef) return;
    const getRooms = async (condition: Condition) => {
      const collectionRef = query(
        collection(db, "rooms"),
        where(condition.fieldName, condition.opStr, condition.value)
      );
      const q = query(collectionRef);
      const unsubcribe = onSnapshot(q, (querySnapshot) => {
        const items: any[] = [];
        querySnapshot.forEach((doc) => {
          const document: any = doc.data();
          document.id = doc.id;
          items.push(document);
        });
        setListRoom(items);
      });
      return () => {
        unsubcribe();
      };
    };
    getRooms(conditionRef);
  }, [conditionRef, setListRoom]);

  const selectedRoom: SelectedRoom = useMemo(
    () => listRoom.find((room) => room.id === selectedRoomId),
    [listRoom, selectedRoomId]
  );

  useEffect(() => {
    getSelectRoom(selectedRoom);
  });

  // get members from users database;
  const usersCondition: UserCondition | undefined = useMemo(() => {
    if (!selectedRoom) return;
    return {
      fieldName: uid,
      opStr: "in",
      value: selectedRoom.members,
    };
  }, [uid, selectedRoom]);

  useEffect(() => {
    if (!usersCondition) return;
    const getRooms = async (usersCondition: UserCondition) => {
      const q = query(
        collection(db, "users"),
        where("uid", usersCondition.opStr, usersCondition.value)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const members: any[] = [];
        querySnapshot.forEach((doc) => {
          members.push(doc.data());
        });
        setMembers(members);
      });
      return () => {
        unsubscribe();
      };
    };
    getRooms(usersCondition);
  }, [usersCondition, setMembers]);

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
            {listRoom.map((doc) => (
              <li
                className="roomlist__item-name"
                key={doc.id}
                onClick={() => {
                  setSelectedRoomId(doc.id);
                  setShowRoomChat(true);
                }}
              >
                <Link
                  to={`/room-chat/${doc.name}`}
                  style={{ textDecoration: "none" }}
                >
                  {doc.name}
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

            <AddRoomChat
              show={modalShow}
              onHide={() => setModalShow(false)}
              setListRoom={setListRoom}
            />
          </ul>
        </div>
      </div>
      <button
        className="header__roomchat-user__btn-logout"
        onClick={() => {
          signOut(auth).then(() => history.push("/"));
        }}
      >
        Đăng xuất
      </button>
    </>
  );
};

export default ListRoomChat;
