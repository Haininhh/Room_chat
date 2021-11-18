import { createSlice } from "@reduxjs/toolkit";
import { Room, RoomList } from "../assign";
import { RootState } from "../store";

interface Action {
  payload: Room;
  type: string;
}
const initialState: RoomList = {
  rooms: [],
};

const roomListSlice = createSlice({
  name: "roomList",
  initialState,
  reducers: {
    setRoomList: (state: RoomList, action: Action) => {
      const newState = [...state.rooms, action.payload];
      return {
        rooms: newState,
      };
    },
  },
});

export const selectRoomList = (state: RootState) => state.roomList;
export const { setRoomList } = roomListSlice.actions;

export default roomListSlice;
