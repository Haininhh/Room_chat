import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import memberSlice from "./memberSlice";
import roomListSlice from "./roomSlice";
import userSlice from "./userSlice";

const rootReducer = {
  user: userSlice.reducer,
  roomList: roomListSlice.reducer,
  member: memberSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//
export default store;
