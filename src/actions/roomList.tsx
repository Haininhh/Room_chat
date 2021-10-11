export const addNewRoomList = (roomlist) => {
  return {
    type: "ADD_ROOMLIST",
    payload: roomlist,
  };
};
export const setActiveRoomList = (roomlist) => {
  return {
    type: "SET_ACTIVE_ROOMLIST",
    payload: roomlist,
  };
};
