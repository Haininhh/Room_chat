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
      if (state.find((state) => state.uid === action.payload.uid)) {
        return state;
      }
      return state = [...state, action.payload];
    },
    clearMember: (state: Member[], action: any) => {
      return state = [];
    }
  },
});

export const selectMember = (state: RootState) => state.member;
export const { clearMember, setMember } = memberSlice.actions;
export default memberSlice;
