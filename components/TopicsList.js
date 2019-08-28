import React from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


class TopicsList extends Component {
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
                <Text>Gun Control and Gun Rights</Text>
                <Text note numberOfLines={1}>Description</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Guns</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}



export default TopicsList;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});