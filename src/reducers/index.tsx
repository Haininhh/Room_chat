import { combineReducers } from "redux";
import roomListReducer from "./RoomList";
import userReducer from "./User";

const rootReducer = combineReducers({
  roomlist: roomListReducer,
  user: userReducer,
});

export default rootReducer;
