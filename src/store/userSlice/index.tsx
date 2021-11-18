import { createSlice } from "@reduxjs/toolkit";
import { User } from "../assign";
import { RootState } from "../store";

interface Action {
  type: string;
  payload: User;
}

const initialState: User = {
  displayName: "",
  email: "",
  uid: "",
  photoURL: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state: User, action: Action) => {
      return (state = action.payload);
    },
  },
});

export const selectUser = (state: RootState) => state.user;
const { actions } = userSlice;
export const { getUser } = actions;

export default userSlice;
