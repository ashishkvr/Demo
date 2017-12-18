import { combineReducers } from 'redux';
import demoReducer from './demoReducer';

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    demoReducer: demoReducer,
  });
}
