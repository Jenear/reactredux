import { createAction } from 'redux-actions';
import { ADDTODO, DELETEITEM, TOGGELTODO,FILTERLIST,CHECKEDALL,DOUBLECLICK ,UPDATEITEM,CHANGEVALUE} from '../../constants/actionTypes';
export const addTodo = createAction(ADDTODO);
export const deleteItem = createAction(DELETEITEM);
export const toggleTodos = createAction(TOGGELTODO);
export const filterList = createAction(FILTERLIST);
export const checkedAll = createAction(CHECKEDALL);
export const doubleClick = createAction(DOUBLECLICK);
export const updateItem = createAction(UPDATEITEM);
export const changeValue = createAction(CHANGEVALUE);


