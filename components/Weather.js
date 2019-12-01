import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';
// import proptypes for props coming from app.js
import PropTypes from 'prop-types';

// receive props from app.js state
const Weather = ({ weather, temperature}) => {
  return (
    <View 
		style={[
			styles.weatherContainer,
			{backgroundColor:weatherConditions[weather].color}
			]}
		>
		<View style={styles.headerContainer}>
			<MaterialCommunityIcons 
				size={48} 
				name="weather-sunny" 
				color={'#fff'}
			/>
			<Text style={styles.tempText}>{temperature}˚</Text>
		</View>
		<View style={styles.bodyContainer}>
			<Text style={styles.title}>
				{weatherConditions[weather].title}
			</Text>
			<Text style={styles.subtitle}>
				{weatherConditions[weather].subtitle}
			</Text>
    </View>
  </View>
  );
};

Weather.PropTypes = {
	temperature: PropTypes.number.isRequired,
	weather: PropTypes.string
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
		flex: 1,
		flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
	},
	title: {
    fontSize: 60,
    color: '#fff'
	},
	subtitle: {
    fontSize: 48,
    color: '#fff'
  }
});

export default Weather;