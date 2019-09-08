import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Root} from "native-base";
import {Font, AppLoading} from "expo";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CanidateScreen from './Canidates'
import TopicScreen from './Topics'
import VoteScreen from './Vote'
class AppFontLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }
  async componentWillMount() {
    try {
      await Expo.Font.loadAsync({
        Roboto: require("./assets/Fonts/Roboto.ttf"), //assets\Fonts\Roboto_medium.ttfassets\Fonts\Roboto.ttf
        Roboto_medium: require("./assets/Fonts/Roboto_medium.ttf") //assets\Fonts\Roboto_medium.ttf
      });
      this.setState({ loading: false });
    } catch (error) {
      console.log('Error loading icon fonts', error);
    }
  }
  render() {
    if(this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <TabNavigator />
      </Root>
    )
  }
};

const TabNavigator = createBottomTabNavigator({
  Canidates: { screen: CanidateScreen,
    navigationOptions: {
      tabBarLabel: 'Canidates',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contact" color={tintColor} size={24} />
      )
    }
  },
  //Let's do the topics later. We need to figure out the candiates page first.
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
