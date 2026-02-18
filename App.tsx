import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import MintHelloView from 'react-native-mint-sdk';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Mint SDK 1</Text>
      </View>
      <MintHelloView style={styles.mintView} />
      {/* <MintHelloView style={styles.mintView} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 30,
  },
  header: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E7D32',
  },
  mintView: {
    flex: 1,
  },
});

export default App;
