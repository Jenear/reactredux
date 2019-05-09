import React from 'react';

const Todolist = (props) => {
    const list =props.todos.toJS();
    console.log('props.todoslist------------',list)
    return ( <ul>
          {
             list.length ? list.map((item, index) =>  <li key={index}> {item} </li>   
             ) :null 
         }
        </ul>
    );
};
export default Todolist;