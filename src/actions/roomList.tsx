export const addNewRoomList = (room: { name: string; description: string }) => {
  return {
    type: "ADD_ROOM",
    payload: room,
  };
};
// export const setActiveRoomList = (room: string) => {
//   return {
//     type: "SET_ACTIVE_ROOMLIST",
//     payload: room,
//   };
// };
