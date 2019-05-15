// 增加要给待办事项
export const ADDTODO = 'addTodo';
// 修改过滤类型：all:显示全部，active：显示未完成，complated：显示已完成
export const CHANGEFILTER = 'changeFilter';
//删除每一行的list item
export const DELETEITEM = 'deleteItem';

//切换待办事项，完成的时候点击checkbox变成未完成，否则相反
export const TOGGELTODO = 'toggleTodo';
//点击button展示对应的待办事项
export const FILTERLIST = 'filterList';
//全部选中和全部取消
export const CHECKEDALL = 'checkedAll';
//双击待办事项
export const DOUBLECLICK = 'doubleClick';
//修改待办项的值后，回车进行保存，esc推出修改
export const UPDATEITEM = 'updateItem';
//修改待办事项值的方法
export const CHANGEVALUE = 'changeValue';
//删除store中所有的数据
export const USERLOGOUT = 'userLogout';
