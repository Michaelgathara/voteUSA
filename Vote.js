import React, {Component} from 'react';
import { Platform, TouchableOpacity, Image , View, StyleSheet } from 'react-native';
import {Container, Header, Body, CheckBox, Title, Card, CardItem,
Left, Right, Icon, Content, Thumbnail, Grid, Col, Text, Button} from 'native-base';
import { StatusBar } from 'react-native'
 class VoteScreen extends React.Component {
  render() {
//     return(
//         <StatusBar backgroundColor="blue" barStyle = 'light-content' />
//       <Container style={styles.container}>
//           <Header style={styles.header}>
              
//               <Body style={{flex:1}}>
//                   <Title>Vote</Title>
//               </Body>
              
//           </Header>
//           <Content contentContainerStyle={styles.content} >  
//           </Content>
//       </Container>
//   );
    return (
        <StatusBar backgroundColor="blue" barStyle = 'light-content' />

    );
 }

}

export default VoteScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5
  },
  header: {
      paddingRight: 15,
      paddingLeft: 15
  },
  content: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      padding: 15
  }
});