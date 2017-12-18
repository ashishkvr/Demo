import {
  REDUX_DEMO,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case REDUX_DEMO:
      return action.payload;
    default:
      return state;
  }
};
