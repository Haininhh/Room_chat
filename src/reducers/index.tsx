import { combineReducers } from "redux";
import roomListReducer from "./roomList";
// import userReducer from "./user";

const rootReducer = combineReducers({
  roomlist: roomListReducer,
  // user: userReducer,
});

export default rootReducer;
