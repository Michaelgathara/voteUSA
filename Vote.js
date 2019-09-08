import React, {Component} from 'react';
import { Platform, TouchableOpacity, Image , StyleSheet } from 'react-native';
import {Container, Header, Body, CheckBox, Title, Card, CardItem,Left, Right, Icon, Content, Thumbnail, Grid, Col, Button} from 'native-base';
import { StatusBar } from 'react-native'
import ReactNative from 'react-native'
const {View,Text,} = ReactNative 
class VoteScreen extends React.Component {
  render() {
    return (
      <React.View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <StatusBar backgroundColor="blue" barStyle = 'dark-content' />
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
      </React.View>
    );
  }
}

export default VoteScreen;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 5
//   },
//   header: {
//       paddingRight: 15,
//       paddingLeft: 15
//   },
//   content: {
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       padding: 15
//   }
// });