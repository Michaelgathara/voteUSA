import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';

class TopicScreen extends React.Component {
  render() {
      return (
        <Container>
          <Header />
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'https://cdn0.wideopenspaces.com/wp-content/uploads/2017/06/secondamendment-630x339.jpg' }} />
                </Left>
                <Body>
                  <Text>Gun Rights and Gun Control</Text>
                  <Text note numberOfLines={2}>
                    </Text>
                </Body>
                <Right>
                  <Button transparent>
                    <Text>View</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
      );
    }
  }
export default TopicScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});