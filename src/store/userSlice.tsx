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
}
const initialState = {
  current: {
    displayName: "",
    email: "",
    id: "",
    photoURL: "",
  },
  loading: false,
} as UserState;

export const getMe = createAsyncThunk("/", async () => {
  const currentUser = await userApi.getMe();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (state, action: any) => {
      state.loading = false;
      state = action.payload;
      return action.payload;
    });
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
