import { createStore, combineReducers, compose } from 'redux';
import reducers from '../reducer';

// chrome：redux-devtools调试
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

export default createStore(combineReducers({ ...reducers }), composeEnhancers());
