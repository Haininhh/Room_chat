const initialState = {
  user: { name: "", avatar: "", id: "", email: "" },
};
interface Action {
  type: string;
  payload: { name: string; avatar: string; id: string; email: string };
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "AUTH_LOGIN": {
      const user = { ...state.user };
      return {
        ...state,
        user: user,
      };
    }

    default:
      return state;
  }
};
export default userReducer;
