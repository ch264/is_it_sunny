import React from 'react';
// import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;

import { StyleSheet, Text, View, Animated } from 'react-native';

import { API_KEY } from './utils/WeatherKeys';

import Weather from './components/Weather';

export default class App extends React.Component {

  // store json data from api in state
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  }

  componentDidMount(lat=37.773972, lon=-122.431297) {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error, cannot look outside'
        });
      }
    );
    console.log('did update')
  }
  // lat=37.773972, lon=-122.431297
  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      // pass in state values as props to Weather Component
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false
      });

    });
  }

  // fetchWeather (lat, lon) {
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`, {
  //     method: 'GET'
  //     // mode: 'no-cors'
  //   })
  //   .then(function(response) {
  //     if (!response.ok) {
  //       throw Error(response.statusText);
  //     }
  //     // read the response body as json
  //     return response.json();
  //   })
  //   .then(function(responseJson) {
  //     // do stuff with json
  //     alert(JSON.stringify(responseJson));
  //     console.log(responseJson);
  //   })
  //   .catch(function(error) {
  //     console.log('we have a problem: ', error);
  //   });
  // }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>
              Fetching The Weather
            </Text>
          </View> 
        ) : ( 
          <Weather weather={weatherCondition} temperature={temperature} />
        )}
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
