import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Member {
  createAt: any;
  displayName: string;
  email: string;
  photoURL: string;
  providerId: string;
  uid: string;
}
const initialState: Member[] = [];

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state: Member[], action: any) => {
      if (state.find((room) => room.uid === action.payload.uid)) {
        return state;
      }
      return [...state, action.payload];
    },
  },
});

export const selectMember = (state: RootState) => state.member;
export const { setMember } = memberSlice.actions;
export default memberSlice;
