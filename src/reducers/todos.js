import { ADDTODO, DELETEITEM, TOGGELTODO,CHECKEDALL,DOUBLECLICK,UPDATEITEM,CHANGEVALUE } from '../constants/actionTypes';
import { handleActions } from 'redux-actions';
import addtodoModel from '../models/addtodo';
// export default (state = initState, action) => {
//     console.log('action-----',action)
//     //do something
//     switch (action.type) {
//         case ADDTODO:
//             return [
//                 ...state,
//                 { id: Date.now(), title: action.payload, complated: false }
//             ];
//         default:
//             return state;
//     }
// };

//上面是普通的reduces写法，下面是用了redux-actions插件之后reducer的写法

export default handleActions(
  {
    //[ADDTODO] 这个地方需要给ADDTODO加上[],才会生效
    // 第二个参数实际上是action，这里用了es6的解构{ payload }，把payload解构了出来，[ADDTODO]中的ADDTODO就代表了action.type 的值，
    // updateIn 方法用回调的方法去处理拿到的值，x就是取回来的值，然后进行正常的处理就可以
    [ADDTODO]: (state, { payload }) => {
      return state.updateIn(['lists'], x => x.push(payload));
    },
    [DELETEITEM]: (state, { payload }) =>  (
      state.updateIn(['lists'], x =>
        x.filter(item => {
          return item.id !== payload.id;
        })
      )
    ),
    [TOGGELTODO]:(state,{payload})=> (
      state.updateIn(['lists'], x =>
        x.map(item => {
          if(item.id === payload.id) {
            item.completed=!item.completed;
          }
          return {...item}//此处不可以直接返回item，需要返回一个新的对象，否则react不更新页面，用{...item }来实现
        })
      )
    ),
    [CHECKEDALL]:(state,{payload})=>
        state.updateIn(['lists'],x=>{
          console.log('x',x)
          return x.map(item=>{
            item.completed=payload.checked
            return {...item}
          })
        }),
    [DOUBLECLICK]:(state,{payload})=>(
      state.setIn(['editing'],payload.id).setIn(['editValue'],payload.value)
    ),
    [CHANGEVALUE]:(state,{payload})=>(
      state.setIn(['editValue'],payload.value)
    ),
    [UPDATEITEM]:(state,{payload})=>{
      console.log('sdsdsdsdsdd',payload)
      // const {e,id}=payload;
      if(payload.code===13){
        return state.updateIn(['lists'],x=>{
          return x.map(item=>{
            if(item.id === payload.id){
              item.value=payload.value
            }
            return{...item}
          })
        }).setIn(['editing'],'')
      }else if(payload.code===27){
        return state.setIn(['editing'],'')
      }else{
        return state
      }
      
    }
  },
  addtodoModel
);
