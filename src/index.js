import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store';
import { AppNavigator } from './app';
import AppWithNavigationState from './navigation';

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};
const store = getStore(navReducer);
export default class APP extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
