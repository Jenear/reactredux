import { createAction } from 'redux-actions';
import { ADDTODO, DELETEITEM } from '../../constants/actionTypes';
export const addTodo = createAction(ADDTODO);
export const deleteItem = createAction(DELETEITEM);
