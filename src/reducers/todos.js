import { ADDTODO } from '../constants/actionTypes';
import {handleActions}from 'redux-actions';
import addtodoModel from '../models/addtodo'
import { immutable } from 'immutable';
const initState = [];
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

export default  handleActions(
    {
        //[ADDTODO] 这个地方需要给ADDTODO加上[],才会生效
        [ADDTODO]:(state,{payload})=>{
            // console.log('1111---------',state.toJS(),payload)
            // let arr=state.getIn(['lists']).toJS();
            
            // arr.push(payload)
            // console.log('arr---------',arr,'payload---',payload)
            return state.updateIn(['lists'],(x)=>(x.push(payload)))
        }
},addtodoModel)


