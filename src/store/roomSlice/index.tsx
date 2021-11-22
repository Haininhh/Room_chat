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
      if (state.rooms.find((room) => room.id === action.payload.id)) {
        return state;
      }
      const newState = [...state.rooms, action.payload];
      return {
        rooms: newState,
      };
    },
    clearRoomList: (state: RoomList | undefined, action: Action) => {
      return {
        rooms: [],
      };
    },
  },
});

export const selectRoomList = (state: RootState) => state.roomList;
export const { setRoomList, clearRoomList } = roomListSlice.actions;

export default roomListSlice;
