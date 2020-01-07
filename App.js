import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './Home'
import FavouriteScreen from './Favourite'

const TabNavigator = createStackNavigator({
  Home: HomeScreen,
  Favourite: FavouriteScreen
})
export default createAppContainer(TabNavigator)