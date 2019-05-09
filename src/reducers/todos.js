import { ADDTODO } from '../constants/actionTypes';
const initState = [];
const todosReducer = (state = initState, action) => {
  //do something
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        { id: Data.now(), title: action.title, complated: false }
      ];
    default:
      return state;
  }
};

export default todosReducer;
