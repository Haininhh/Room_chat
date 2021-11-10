import { BrowserRouter as Router } from "react-router-dom";
import "./roomchat.css";
import RoomChatDesktop from "./RoomChatDesktop/RoomChatDesktop";
import RoomChatMobile from "./RoomChatMobile/RoomChatMobile";

export type SelectedRoom = {
  name: string;
  description: string;
  members: string[];
  id: string;
};

const RoomChat = () => {
  return (
    <Router>
      <RoomChatDesktop />
      <RoomChatMobile />
    </Router>
  );
};

export default RoomChat;
