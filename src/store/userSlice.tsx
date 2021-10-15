import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../config/FirebaseConfig";
import { RootState } from "./store";

export interface User {
  displayName: string;
  email: string;
  uid: string;
  photoURL: string;
}
export interface UserState {
  current?: User;
}
const initialState: UserState = {
  current: undefined,
};

export const getMe = createAsyncThunk("/user/getMe", async () => {
  const currentUser = await auth.currentUser;
  if (!currentUser) return;
  return {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    email: currentUser.email,
    photoUrl: currentUser.photoURL,
  };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state: UserState, action: any) => {
      state.current = action.payload;
      return state;
    });
  },
});

export const selectUser = (state: RootState) => state.user.current;

export default userSlice.reducer;
