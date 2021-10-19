import { ChangeEvent, MouseEvent, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useAppSelector } from "../../../store/hooks";
import { selectUser } from "../../../store/userSlice";
import MessageChat from "./MessageChat";
//overflow-y: auto: thêm thanh scroll lên xuống khi phần content chat vượt quá chiều cao cố định

export interface Message {
  message: string;
  createdAt: string;
  displayName: string;
  photoURL: string | null;
}

const ContentRoomChat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: ChangeEvent<{ value: string }>) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = (e: MouseEvent) => {
    e.preventDefault();
  };
  const user = useAppSelector(selectUser);
  const { displayName, email, photoURL } = user;
  const avatar = photoURL;
  const defaultAvatar = "https://graph.facebook.com/403982431236568/picture";

  return (
    <div className="content__roomchat">
      <div className="content__roomchat-message">
        <MessageChat
          photoURL={avatar ? avatar : defaultAvatar}
          displayName={
            displayName ? displayName : email.charAt(0).toUpperCase()
          }
          createdAt="123425234"
          message={message}
        />
      </div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Nhập tin nhắn..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
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
