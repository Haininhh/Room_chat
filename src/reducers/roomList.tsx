const roomListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROOMLIST": {
      return state;
    }
    case "SET_ACTIVE_ROOMLIST": {
      return state;
    }

    default:
      return state;
  }
};

export default roomListReducer;
