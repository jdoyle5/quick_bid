import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import { receiveItems } from '../../actions/item_actions';

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
          <Image source={image} style={{width:'100%', height: 350, marginBottom: 40, backgroundColor: 'orange'}} ></Image>
          <Text style={{color: '#3d5c68'}}>Bid Opens: {item.bid_time}</Text>
          <Text style={{color: '#3d5c68'}}>MSRP: ${item.msrp}</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//     backgroundColor: 'black',
//   },
//   avatar: {
//     margin: 20,
//   },
//   avatarImage: {
//     borderRadius: 50,
//     height: 100,
//     width: 100,
//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'white'
//   },
//   text: {
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: 5,
//   },
//   buttons: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     margin: 20,
//     marginBottom: 30,
//   },
// });



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
        padding     : 10,
        paddingTop  : 0,
        alignItems: 'center'
    },
    center : {
      alignItems: 'center'
    }
});
































//////////
