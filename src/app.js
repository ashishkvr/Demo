import { StackNavigator } from 'react-navigation';
import List from './containers/pages/List/';

const Routes = {
  List: { screen: List },
};
export const AppNavigator = StackNavigator(Routes);
