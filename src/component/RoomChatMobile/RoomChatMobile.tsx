import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ContainerRoomChat from "../RoomChatMobile/ContainerRoomChat/ContainerRoomChat";
import ListRoomChat from "./ListRoomChat/ListRoomChat";

const RoomChatMobile = () => {
  const [showRoomChat, setShowRoomChat] = useState(false);
  const location: any = useLocation();
  const room = location.state && location.state.room;

  return (
    <div className="container container__mobile max-width-100">
      <Switch location={room || location}>
        <Route
          exact
          path="/room-chat"
          children={<ListRoomChat setShowRoomChat={setShowRoomChat} />}
        />
        <Route
          path="/room-chat/:id"
          children={<ContainerRoomChat showRoomChat={showRoomChat} />}
        />
      </Switch>
    </div>
  );
};

export default RoomChatMobile;
