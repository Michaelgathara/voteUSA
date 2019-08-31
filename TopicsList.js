import React, {Component} from 'react';
import { Platform, TouchableOpacity, Image , View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class TopicsList extends Component {
    render (){
        return(
            <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Gun Rights and Gun Control</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://news.utexas.edu/wp-content/uploads/2018/03/gun_control_830-600x337.5-c-default.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Healthcare</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://mediadc.brightspotcdn.com/dims4/default/fb22f35/2147483647/strip/true/crop/2290x1322+0+0/resize/2290x1322!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2Fc1%2Fd8%2F8d3d12c74136aa902d2d85563a93%2Fhealthcare-reform.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default TopicsList;
