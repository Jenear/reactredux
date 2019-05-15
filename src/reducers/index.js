import { combineReducers } from 'redux-immutable';
import filterReducer from './filter';
import todoList from './todos';
import filterType from './filter';

//把所有的reducer合并，去生成store
// export default combineReducers({ filterReducer, todosReducer });

const appReducer = combineReducers({ todoList });
//清空store里的数据
const rootReducer = (state, action) => {
  // debugger;
  if (action.type === 'userLogout') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
