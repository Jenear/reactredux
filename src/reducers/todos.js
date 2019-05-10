import { ADDTODO, DELETEITEM } from '../constants/actionTypes';
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
    [DELETEITEM]: (state, { payload }) => {
      return state.updateIn(['lists'], x =>
        x.filter(item => {
          return item.id !== payload.id;
        })
      );
    }
  },
  addtodoModel
);
