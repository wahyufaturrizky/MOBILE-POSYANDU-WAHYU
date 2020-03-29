import React, { Component } from "react";
import Carousel from 'react-native-banner-carousel';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Item,
  Input,
  Form,
  Card,
  CardItem,
  Thumbnail,
  Body,
  Grid,
  Col,
  H3,
  Badge
} from "native-base";

import { 
  Image,
  View,
  Dimensions } from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
const cardImage04 = require("../../../assets/drawer-cover_04.jpg");
const wahyu = require("../../assets/img/author.jpg");

const images = [
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg",
  "../../assets/img/banner01.jpg"
];

class DetailArticle extends Component {

  renderPage(image, index) {
    return (
    <View key={index}>
      <Image style={{ width: BannerWidth, height: BannerHeight }}
        source={require("../../assets/img/banner01.jpg",)} />
      <View
        style={{width: '100%', height: 280, borderRadius: 4, backgroundColor: 'rgba(255, 255, 255, 0)', position: 'absolute'}}>
      </View>
    </View>
    );
    }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header transparent>
          <Left>
            <Button 
              transparent
              onPress={() => this.props.navigation.navigate("Anatomy")}
            >
              <Icon style={{color:"black"}} name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Transparent</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>

        <ScrollView>
          <Content padder>
            {/* Detail Article */}
            <H3 style={{marginTop: 8}}>Demi kesehatan bayi! ini yang harus dilakukan Parents</H3>

            <Card style={{marginTop: 24,}}>
              <CardItem>
                <Left>
                  <Thumbnail source={wahyu} />

                  <Body>
                    <Text>Wahyu Fatur Rizki</Text>
                    <Text note>Writer</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={cardImage04} style={{height: 200, width: null, flex: 1}} />
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

            <Text style={{marginTop: 24,}}>
            Bayi memang membawa kebahagiaan dan keceriaan. Tiba-tiba, rumah menjadi ramai, dan setiap hari hidup Anda tak pernah lepas dari si kecil. Karena itu, wajib bagi Parents untuk mengupayakan semua cara demi menjaga kesehatan bayi. 
            </Text>

            <Text style={{marginTop: 16,}}>
            Hanya butuh satu detik untuk membuat hal buruk terjadi. Jadi, jangan pernah tinggalkan bayi sendirian atau tanpa pengawasan. Meninggalkan bayi sendirian bisa menimbulkan bahaya yang tak pernah diduga sebelumnya. 
            </Text>

          </Content>
        </ScrollView>

        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button style={{backgroundColor: "white"}} active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} style={{color: "black"}} type="SimpleLineIcons" name="home" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} style={{color: "black"}} type="SimpleLineIcons" name="magnifier" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} style={{color: "black"}} type="SimpleLineIcons" name="compass" />
            </Button>
            <Button style={{backgroundColor: "white"}} active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} style={{color: "black"}} type="SimpleLineIcons" name="user" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default DetailArticle;
