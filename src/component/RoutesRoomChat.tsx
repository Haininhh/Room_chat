import { Route, Switch } from "react-router-dom";
import RoomChat from "./RoomChat";

const routeRoomChat = [
  <Switch>
    <Route path="/:room" component={RoomChat} />
  </Switch>,
];

export default routeRoomChat;
