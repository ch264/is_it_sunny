import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { API_KEY } from './utils/WeatherKeys';

import Weather from './components/Weather';

export default class App extends React.Component {

  // store json data from api in state
  state = {
    isLoading: false,
    temperature: 0;
    weatherCondition: null,
    error: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error, cannot look outside'
        })
      }
    )
  }

  fetchWeather(lat = 25, long = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    ).then (res => res.json()).then(json => {
      console.log(json);
    });
  }

  render() {

    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
      {isLoading ? (
        <text>Checking The Weather Stone</text>
      ) : <Weather />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
