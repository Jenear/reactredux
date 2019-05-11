import React from 'react';

const TodoFooter=(props)=>{
    return <div>
        <button onClick={()=>{props.filterList('all')}} style={{background:props.filter==='all'?'skyblue':''}}>全部</button>
       <button  onClick={()=>{props.filterList('completed')}}  style={{background:props.filter==='completed'?'skyblue':''}}>已完成</button>
        <button  onClick={()=>{props.filterList('active')}} style={{background:props.filter==='active'?'skyblue':''}}>未完成</button>
    </div>
}

export default TodoFooter;