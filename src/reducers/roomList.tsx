// const initialState = {
//     list: [],
//     activeId: null
// }

interface State {
  state: [];
  action: [] | null;
}
const roomListReducer = ({ state, action }: State) => {
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
