import { combineReducers } from 'redux';
import filterReducer from './filter';
import todosReducer from './todos';

//把所有的reducer合并，去生成store
export default combineReducers({ filterReducer, todosReducer });