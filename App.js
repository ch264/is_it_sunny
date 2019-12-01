import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  state = {
    isLoading: false
  }

  render() {

    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
      {isLoading ? (
        <text>Checking The Weather Stone</text>
      ) : (
        <View>
          <Text style={styles.paragraph}>
          weather in SF today</Text>
          </View>
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
});
