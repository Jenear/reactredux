import React from 'react';
/**
 * 1: 输入框中输入文字  --->  按回车  ---> 向store发一个action{type：ADDTODO，title：输入的内容}
 * 2：store 会调用 todos reducer,返回新的状态对象  eg:[{id:1,title,complate:false}]
 */

const Todoheader = (props) => {
  return (
    <div>
      <input type="text" onKeyDown={props.addTodo} /> ;
      <button onClick={props.logouts}>清空store</button>
    </div>
  );
};

export default Todoheader;
