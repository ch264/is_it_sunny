import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = () => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.tempText}>Temperature</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Sunny Yay!</Text>
        <Text style={styles.subtitle}>Here comes the sun</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
});