const initialState = {
  room: [] as any,
};

interface Action {
  type: string;
  payload: { name: string; description: string };
}

const roomListReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_ROOM": {
      const newRoom = [...state.room];
      newRoom.push(action.payload);

      return {
        ...state,
        room: newRoom,
      };
    }
    // case "SET_ACTIVE_ROOMLIST": {
    //   const newActiveId = action.payload;
    //   return {
    //     ...state,
    //     activeId: newActiveId,
    //   };
    // }

    default:
      return state;
  }
};

export default roomListReducer;
