import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../config/FirebaseConfig";
import { RootState } from "./store";

export interface Timestamp {
  nanoseconds: number;
  seconds: number;
}

export interface User {
  displayName: string;
  email: string;
  uid: string;
  photoURL: string;
}
const initialState: User = {
  displayName: "",
  email: "",
  uid: "",
  photoURL: "",
};

export const getMe = createAsyncThunk("/user/getMe", async () => {
  const currentUser = await auth.currentUser;
  if (!currentUser) return;
  return {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoURL: currentUser.photoURL,
  };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action: any) => {
      state = action.payload;
      return state;
    });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
