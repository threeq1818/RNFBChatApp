// eslint-disable-next-line prettier/prettier
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
};

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  tabBarPosition: 'bottom'
};

export default createAppContainer(createBottomTabNavigator(routeConfigs, tabBarOptions));
