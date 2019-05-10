import React from 'react';
import { Checkbox } from 'antd';

const Todolist = props => {
  const list = props.todos.toJS();
  console.log('props.todoslist------------', list);
  return (
    <ul>
      {list.length
        ? list.map((item, index) => (
            <li key={item.id}>
              <input type="checkbox" />
              <span>{item.value}</span>
              <span>
                <button onClick={() => props.delete(item.id)}>X</button>
              </span>
            </li>
          ))
        : null}
    </ul>
  );
};
export default Todolist;
