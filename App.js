import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  Slider,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.onPressHappyButton3 = this.onPressHappyButton3.bind(this);
    this.onPressHappyButton2 = this.onPressHappyButton2.bind(this);
    this.onPressHappyButton1 = this.onPressHappyButton1.bind(this);

    this.onPressSadButton1 = this.onPressSadButton1.bind(this);
    this.onPressSadButton2 = this.onPressSadButton2.bind(this);
    this.onPressSadButton3 = this.onPressSadButton3.bind(this);

  }

  onPressHappyButton1() {
    this.handleButtonPress(1);
  }
  onPressHappyButton2() {
    this.handleButtonPress(2);
  }
  onPressHappyButton3() {
    this.handleButtonPress(3);
  }

  onPressSadButton1() {
    this.handleButtonPress(-1);
  }
  onPressSadButton2() {
    this.handleButtonPress(-2);
  }
  onPressSadButton3() {
    this.handleButtonPress(-3);
  }

  // onEmergencyPress() {
  //   Alert.alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
  //       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     { cancelable: false }
  //   )
  // }

  handleButtonPress(val){
      fetch('http://localhost:3000/users/5a4fd8202ab6f472bff97c03/scores', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: val
      }),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          How are you feeling today?
        </Text>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="rgba(102,255,51,1)"
            style={styles.button}
            onPress={this.onPressHappyButton3}>
            <Image
              style={styles.image}
              source={require('./images/happy2.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(255,51,51,1)"
            style={styles.button}
            onPress={this.onPressSadButton1}>
            <Image
              style={styles.image}
              source={require('./images/sad1.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="rgba(102,255,51,0.5)"
            style={styles.button}
            onPress={this.onPressHappyButton2}>
            <Image
              style={styles.image}
              source={require('./images/happy1.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(255,51,51,0.5)"
            style={styles.button}
            onPress={this.onPressSadButton2}>
            <Image
              style={styles.image}
              source={require('./images/sad2.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.rowContainer}>
          <TouchableHighlight
            underlayColor="rgba(102,255,51,0.25)"
            style={styles.button}
            onPress={this.onPressHappyButton1}>
            <Image
              style={styles.image}
              source={require('./images/happy3.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="rgba(255,51,51,0.25)"
            style={styles.button}
            onPress={this.onPressSadButton3}>
            <Image
              style={styles.image}
              source={require('./images/sad3.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 40,
    color: '#000'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 55
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: Image.resizeMode.contain,
  }
});
