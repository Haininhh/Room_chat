import { getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import useFirestore from "../../../config/useFirestore";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";

const InfoRoomChat = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const user = useAppSelector(selectUser);
  const { uid } = user;
  const rooms: any = useFirestore("rooms", {
    fieldName: "members",
    opStr: "array-contains",
    value: uid,
  });

  const getRooms = async () => {
    const items: any[] = [];

    const q = query(rooms);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const document: any = doc.data();
      document.id = doc.id;
      items.push(document);
    });
    setDatas(items);
  };
  getRooms();

  return (
    <div className="room__info">
      <h5 className="room__info-about">Thông tin</h5>
      <div className="room__info-description">
        <h6>Mô tả</h6>
        {datas.map((data) => (
          <p className="mb-0" key={data.id}>
            {data.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoRoomChat;
