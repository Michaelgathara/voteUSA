import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CanidateScreen from './Canidates'
import TopicScreen from './Topics'
import VoteScreen from './Vote'

const TabNavigator = createBottomTabNavigator({
  Canidates: { screen: CanidateScreen,
    navigationOptions: {
      tabBarLabel: 'Canidates',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contact" color={tintColor} size={24} />
      )
    }
  },
  Topics:  { screen: TopicScreen,
    navigationOptions: {
      tabBarLabel: 'Topics',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-list" color={tintColor} size={24} />
      )
    }
  },
  Vote:  { screen: VoteScreen,
    navigationOptions: {
      tabBarLabel: 'Vote',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-information-circle" color={tintColor} size={24} />
      )
    }
  }
  },
{
  initialRouteName : 'Vote',
  order: ['Canidates', 'Topics', 'Vote'],

  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: 'crimson',
    inactiveTintColor: 'dodgerblue'
  }
});

export default createAppContainer(TabNavigator);
