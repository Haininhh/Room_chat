import { useState, ChangeEvent } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
//overflow-y: auto: thêm thanh scroll lên xuống khi phần content chat vượt quá chiều cao cố định

const ContentRoomChat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: ChangeEvent<{ value: string }>) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = () => {
    console.log(message);
  };

  return (
    <div className="content__roomchat">
      <p>{message}</p>
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
