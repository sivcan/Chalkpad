import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Row from './Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    padding: 10
  },
});

export default () => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <ScrollView
      style={styles.scrollView}
    >
      <Row zIndex={100} />
    </ScrollView>
  </View>
);
