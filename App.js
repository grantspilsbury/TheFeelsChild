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
  }

  onPressSadButton() {
    handleButtonPress(0);
  }

  onPressHappySadButton() {
    handleButtonPress(1);
  }

  onPressHappyButton() {
    handleButtonPress(2);
  }

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
          <TouchableHighlight onPress={this.onPressButton}>
            <Image
              style={styles.button}
              source={require('./happy.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPressButton}>
            <Image
              style={styles.button}
              source={require('./happysad.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPressButton}>
            <Image
              style={styles.button}
              source={require('./sad.jpg')}
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
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
  },
  rowContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginBottom: 10
  },
  button: {
    width: 100,
    height: 140,
    resizeMode: Image.resizeMode.contain,
  }
});
