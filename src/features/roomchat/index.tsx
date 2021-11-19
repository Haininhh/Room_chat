import { BrowserRouter as Router } from "react-router-dom";
import "./roomchat.css";
import RoomChatDesktop from "./Desktop";
import RoomChatMobile from "./Mobile";

const RoomChat = () => {
  return (
    <Router>
      <RoomChatDesktop />
      <RoomChatMobile />
    </Router>
  );
};

export default RoomChat;
