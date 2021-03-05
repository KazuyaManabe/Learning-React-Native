import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Welcome } from './Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome name="Bob" />{/* (1) */}
      <Welcome name="Tom" />{/* (1) */}
    </View>
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
