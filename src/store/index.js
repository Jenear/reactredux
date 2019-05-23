import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { Iterable } from 'immutable';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

import { composeWithDevTools } from 'redux-devtools-extension';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    console.log('state: ', state.toJS());
  } else {
    console.log('state:', state);
  }
};

const initialState = Immutable.Map();
const Logger = createLogger({ stateTransformer });
const middleWare = composeWithDevTools(applyMiddleware(Logger));

const store = createStore(rootReducer, initialState, middleWare);

export default store;
