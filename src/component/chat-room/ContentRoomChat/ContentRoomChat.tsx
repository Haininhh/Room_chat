import {
  collection,
  onSnapshot,
  query,
  where,
  WhereFilterOp,
  setDoc,
  doc,
} from "firebase/firestore";
import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { db } from "../../../config/FirebaseConfig";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import MessageChat from "./MessageChat";
//overflow-y: auto: thêm thanh scroll lên xuống khi phần content chat vượt quá chiều cao cố định

export interface Message {
  text: string;
  createdAt: string;
  displayName: string;
  photoURL: string | null;
  roomId: string;
}
interface Props {
  selectedRoom: any | undefined;
}
interface Condition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string;
}

const ContentRoomChat = ({ selectedRoom }: Props) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState<any[]>([]);
  const roomId = selectedRoom?.id;
  const user = useAppSelector(selectUser);
  const { displayName, email, photoURL } = user;
  const avatar = photoURL;
  const defaultAvatar = "https://graph.facebook.com/403982431236568/picture";

  const handleMessageChange = (
    e: ChangeEvent<{ value: string; name: string }>
  ) => {
    setText(e.target.value);
  };
  const handleSendMessage = async (e: MouseEvent) => {
    e.preventDefault();
    const messagesRef = doc(collection(db, "messages"));
    await setDoc(messagesRef, {
      photoURL: avatar,
      displayName: displayName,
      createdAt: "123456",
      text: text,
      roomId: roomId,
    });
    console.log(avatar, displayName);
  };
  const condition: Condition | undefined = useMemo(() => {
    if (!selectedRoom) return;
    return {
      fieldName: "roomId",
      opStr: "==",
      value: selectedRoom.id,
    };
  }, [selectedRoom]);

  useEffect(() => {
    if (!condition) return;
    const getRooms = async (condition: Condition) => {
      const q = query(
        collection(db, "messages"),
        where(condition.fieldName, condition.opStr, condition.value)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const items: any[] = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setMessage(items);
      });
      return () => {
        unsubscribe();
      };
    };
    getRooms(condition);
  }, [condition]);

  console.log(message);

  return (
    <div className="content__roomchat">
      <div className="content__roomchat-message">
        <MessageChat
          photoURL={avatar ? avatar : defaultAvatar}
          displayName={
            displayName ? displayName : email.charAt(0).toUpperCase()
          }
          createdAt="123456"
          text={text}
          roomId={roomId ? roomId : undefined}
        />
      </div>
      <InputGroup>
        <FormControl
          placeholder="Nhập tin nhắn..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="message"
          value="message"
          onChange={handleMessageChange}
          // onKeyDown={handleSendMessage}
        />
        <button
          id="button-addon2"
          className="send-message d-flex align-center justify-center"
          onClick={handleSendMessage}
        >
          <h6 className="mb-0">Gửi</h6>
        </button>
      </InputGroup>
    </div>
  );
};

export default ContentRoomChat;
