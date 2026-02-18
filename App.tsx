import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import MintHelloView from 'react-native-mint-sdk';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MintHelloView style={styles.mintView} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  mintView: {
    flex: 1,
  },
});

export default App;
