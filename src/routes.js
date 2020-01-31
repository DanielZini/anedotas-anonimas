import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import patterns from './patterns';

import Feed from './pages/Feed';
import NewPost from './pages/NewPost';


export default createAppContainer(
  createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerShown: false
      }
    },
    NewPost: {
      screen: NewPost,
      navigationOptions: {
        title: 'Nova Anedota'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerBackTitleVisible: false,
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontFamily: patterns.fontBold,
      },
      headerStyle: {
        backgroundColor: patterns.cl.primary,
      },
      mode: 'modal'
    },
    initialRouteName: 'Feed',
  })
)