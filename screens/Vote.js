import React from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class VoteScreen extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.allsides.com/topics/guns'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default VoteScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});