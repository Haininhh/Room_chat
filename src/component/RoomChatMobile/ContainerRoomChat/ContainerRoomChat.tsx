import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../config/FirebaseConfig";
import { Room } from "../../../store/assign";
import { setMember } from "../../../store/memberSlice";
import { selectRoomList } from "../../../store/roomSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { UserCondition } from "../ListRoomChat/ListRoomChat";
import ContentRoomChat from "./ContentRoomChat/ContentRoomChat";
import HeaderRoomChat from "./HeaderRoomChat/HeaderRoomChat";
import InfoRoomChat from "./InfoRoomChat/InfoRoomChat";

interface Props {
  showRoomChat: boolean;
}

const ContainerRoomChat = ({ showRoomChat }: Props) => {
  let { id }: any = useParams();
  const dispatch = useAppDispatch();
  const roomlist = useAppSelector(selectRoomList);
  const { rooms } = roomlist;

  const selectedRoom: Room | undefined = useMemo(
    () => rooms.find((room) => room.name === id),
    [rooms, id]
  );

  const usersCondition: UserCondition | undefined = useMemo(() => {
    if (!selectedRoom) return;
    return {
      fieldName: "uid",
      opStr: "in",
      value: selectedRoom.members,
    };
  }, [selectedRoom]);

  useEffect(() => {
    if (!usersCondition) return;
    const getRooms = async (usersCondition: UserCondition) => {
      const q = query(
        collection(db, "users"),
        where("uid", usersCondition.opStr, usersCondition.value)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
    getRooms(usersCondition);
  }, [usersCondition, dispatch]);

  return (
    <div className="height-100vh">
      <HeaderRoomChat selectedRoom={selectedRoom} />
      <div className="content__roomchat-container d-flex">
        <div className="w-70 col-lg-12">
          <ContentRoomChat selectedRoom={selectedRoom} />
        </div>
        <div className="w-30">
          <InfoRoomChat selectedRoom={selectedRoom} />
        </div>
      </div>
    </div>
  );
};

export default ContainerRoomChat;
