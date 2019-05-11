import { combineReducers } from 'redux-immutable';
import filterReducer from './filter';
import todoList from './todos';
import filterType from './filter'

//把所有的reducer合并，去生成store
// export default combineReducers({ filterReducer, todosReducer });
export default combineReducers({ todoList ,filterType});
