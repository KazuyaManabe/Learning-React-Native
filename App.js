import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Your_age your_age = "23" times = "12"/>
    </View>
  );
}

function Your_age(props) {
  return (
    <Text>You are {props.your_age} years old.
    I'm {props.your_age * props.times} years old.</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
