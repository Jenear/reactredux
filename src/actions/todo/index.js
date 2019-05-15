import { createAction } from 'redux-actions';
import { ADDTODO, DELETEITEM, USERLOGOUT } from '../../constants/actionTypes';
export const addTodo = createAction(ADDTODO);
export const deleteItem = createAction(DELETEITEM);
export const logout = createAction(USERLOGOUT);
