import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../config/FirebaseConfig";
import { SelectedRoom } from "../../RoomChat";
import { UserCondition } from "../ListRoomChat/ListRoomChat";
import ContentRoomChat from "./ContentRoomChat/ContentRoomChat";
import HeaderRoomChat from "./HeaderRoomChat/HeaderRoomChat";
import InfoRoomChat from "./InfoRoomChat/InfoRoomChat";

interface Props {
  showRoomChat: boolean;
  members: any[] | undefined;
  listRoom: any[];
  setMembers: (param: any) => void;
}

const ContainerRoomChat = ({
  showRoomChat,
  members,
  listRoom,
  setMembers,
}: Props) => {
  let { id }: any = useParams();
  const selectedRoom: SelectedRoom = useMemo(
    () => listRoom.find((room) => room.name === id),
    [listRoom, id]
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
    <div className="height-100vh">
      <HeaderRoomChat selectedRoom={selectedRoom} members={members} />
      <div className="content__roomchat-container d-flex">
        <div className="w-70 col-lg-12">
          <ContentRoomChat selectedRoom={selectedRoom} />
        </div>
        <div className="w-30">
          <InfoRoomChat selectedRoom={selectedRoom} members={members} />
        </div>
      </div>
    </div>
  );
};

export default ContainerRoomChat;
