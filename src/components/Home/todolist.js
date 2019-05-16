import React from 'react';

const Todotodos = ({
    todos,
    editing, 
    activeCount,
    editValue,
    toggle,
    checkedToggle,
    delItem,
    doubleClickItem,
    updateValue,
    changeValue,
}) =>  (
    <div>
        {todos.length?
             <div>
                 <input type="checkbox" checked={!activeCount}   onChange={(e)=>checkedToggle(e.target.checked)} /> 
                <span>{activeCount?'全部选中':'全部取消'}</span>
            </div>
        :null}
        <ul>
            {todos.length
            ? todos.map((item, index) => (
                <li key={item.id}>
                <input type="checkbox" onChange={()=>toggle(item.id)} checked={item.completed}  />
                {
                    editing===item.id?
                    <input 
                        type="text" 
                        value={editValue} 
                        autoFocus={true}
                        onBlur={(e)=>updateValue(item.id,e.target.value,13)}
                        onChange={(e)=>changeValue(e.target.value)}
                        onKeyDown={(e)=>updateValue(item.id,e.target.value,e.keyCode,e)}
                     />
                    :<span 
                        style={{color:item.completed?'red':'green',paddingLeft:10,width:156,display:'inline-block',textDecoration:(item.completed?'line-through':'')}}
                        onDoubleClick={()=>doubleClickItem(item.id,item.value)}
                    >
                        {item.value}
                    </span>
                }
                <span>
                    <button onClick={() => delItem(item.id)}>X</button>
                </span>
                </li>
            ))
            : null}
        </ul>
        {todos.length?<div>未完成事项数量：{activeCount}</div>:null}
    </div>
);
export default Todotodos;
