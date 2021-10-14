// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { auth } from "../config/FirebaseConfig";
// import { getMe } from "../store/userSlice";
import ContentRoomChat from "./chat-room/ContentRoomChat/ContentRoomChat";
import InfoRoomChat from "./chat-room/InfoRoomChat/InfoRoomChat";
import ListRoomChat from "./chat-room/ListRoomChat/ListRoomChat";
import "./chatRoom.css";
import HeaderRoomChat from "./HeaderRoomChat";

const RoomChat = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
  //     if (!user) {
  //       console.log("User is not logged in");
  //       return;
  //     }
  //     try {
  //       await dispatch(getMe());
  //       history.push("/room-chat");
  //     } catch (error) {
  //       console.log("Failed to login ", error);
  //     }
  //   });

  //   return () => unregisterAuthObserver();
  // }, [history, dispatch]);

  return (
    <div className="container max-width-100">
      <div className="row">
        <div className="col-3 p-0 list-room-chat">
          <ListRoomChat />
        </div>
        <div className="col-9 p-0 height-100vh">
          <HeaderRoomChat />
          <div className="content__roomchat-container d-flex ">
            <div className="w-70">
              <ContentRoomChat />
            </div>
            <div className="w-30">
              <InfoRoomChat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomChat;
