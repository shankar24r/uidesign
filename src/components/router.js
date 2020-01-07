import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../pages/first'
import FavouriteScreen from '../pages/second'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Favourite: FavouriteScreen
  }, {
  tabBarOptions: {
    activeTintColor: '#000000',
    inactiveTintColor: '#7E7E7E',
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 17,
    },
    indicatorStyle: {
      backgroundColor: '#0381E7',
      height: 6,
      borderWidh: 2,
    },
    tabStyle: {
      height: 60,
    },
    style: {
      backgroundColor: '#D3D3D4',
    },
  }
})
export default TabNavigator