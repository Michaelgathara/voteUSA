import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class CanidateScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Canidates</Text>
      </View>
    );
  }
}

export default CanidateScreen; 

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});