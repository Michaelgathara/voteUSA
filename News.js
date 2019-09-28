import React, {Component} from 'react';
import { Platform, TouchableOpacity, Image , StyleSheet, StatusBar } from 'react-native';
import {Container, Header, Body, CheckBox, Text, View, Title, Card, CardItem,Left, Right, Icon, Content, Thumbnail, Grid, Col, Button} from 'native-base';

 class NewsScreen extends React.Component {
  render() {
    return(
      <Container style={styles.container}>
          <Header style={styles.header}>
              
              <Body style={{flex:1}}>
                  <Title>News</Title>
              </Body>
              
          </Header>
          <Content contentContainerStyle={styles.content} >  
          </Content>
      </Container>
  )
 }

}

export default NewsScreen;

const styles = StyleSheet.create({
  container: {

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