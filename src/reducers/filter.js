import { FILTERLIST } from '../constants/actionTypes';
import { handleActions } from 'redux-actions';

import filterModel from '../models/filterList'

// const filterReducer = (state = 'all', action) => {
//   switch (action.type) {
//     case CHANGEFILTER:
//       return action.filter;
//     default:
//       return state;
//   }
// };
// export default filterReducer;

export default handleActions({
    [FILTERLIST]:(state,{payload})=>{
console.log('11111111111111111111111111',payload)
        return state.setIn(['type'],payload.filter)
    }
    

},filterModel)
