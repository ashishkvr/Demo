import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import getRootReducer from './reducers';

export default function getStore(navReducer) {
  const store = createStore(
    getRootReducer(navReducer),
    undefined,
    applyMiddleware(promiseMiddleware, thunkMiddleware, logger),
  );
  return store;
}
