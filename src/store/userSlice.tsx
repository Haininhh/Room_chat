import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

interface UserState {
  current: {
    displayName: string;
    email: string;
    id: string;
    photoURL: string;
  };
  loading: boolean;
  error: string;
}
const initialState = {
  current: {
    displayName: "",
    email: "",
    id: "",
    photoURL: "",
  },
  loading: false,
  error: "",
} as UserState;

export const getMe = createAsyncThunk("/", async () => {
  const currentUser = await userApi.getMe();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.loading = false;
      state.current = action.payload;
    });
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
