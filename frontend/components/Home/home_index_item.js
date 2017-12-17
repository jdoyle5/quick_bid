import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import { receiveItems } from '../../actions/item_actions';
import moment from 'moment';

export default class HomeIndexItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.item.title,
      expanded: false,
      animation: new Animated.Value(55),
    };

    this.icons = {
      'up'    : require('../../images/arrow_up.png'),
      'down'  : require('../../images/arrow_down.png')
    };
  }

  toggle() {
    let initialValue = this.state.expanded? this.state.maxHeight +
          this.state.minHeight : this.state.minHeight,
        finalValue = this.state.expanded? this.state.minHeight :
          this.state.maxHeight + this.state.minHeight;

    this.setState({ expanded : !this.state.expanded });
    this.state.animation.setValue(initialValue);
    Animated.spring(
      this.state.animation,
      { toValue: finalValue }
    ).start();
  }

  _setMaxHeight(event){
    this.setState({
      maxHeight   : event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event){
    this.setState({
      minHeight   : event.nativeEvent.layout.height
    });
  }

  render(){
    const { item } = this.props;
    let image = {uri: item.img_url};

    let icon = this.icons['down'];

    if(this.state.expanded){
        icon = this.icons['up'];   //Step 4
    }

    // const startingBid = Math.round(item.msrp * .2);
    const bidTime = moment(item.bid_time).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <Animated.View style={[styles.container, {height: this.state.animation}]}>
        <View style={styles.container} >
          <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
            <View style={styles.center}>
              <TouchableHighlight
                style={styles.button}
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1">
                <Text style={styles.title}>{this.state.title}</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
            <Text style={{color: '#3d5c68'}}> {item.description} </Text>
            <Image source={image} style={{width:'100%', height: 350, marginBottom: 40}} ></Image>
            <Text style={styles.info}>MSRP: ${item.msrp}</Text>
            <Text style={styles.info}>Auction Starts:</Text>
            <Text style={styles.info}>{bidTime}</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
    container   : {
        backgroundColor: 'white',
        margin:10,
        overflow:'hidden',
        borderRadius: 10,
    },
    titleContainer : {
        flexDirection: 'column',
        height: 55
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#3d5c68',
        fontWeight:'bold',
        height  : 30
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 30,
        paddingTop  : 0,
        alignItems: 'center'
    },
    center : {
      alignItems: 'center'
    },
    info: {
      fontSize: 16,
      color: '#3d5c68'
    }
});
