import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../../components/Home/index';
import ProfileScreen from '../../components/Profile/index';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;