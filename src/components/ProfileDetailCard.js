import React from 'react';

import {
  View,
  StyleSheet,
  Image
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <Image source={require('../../images/Email.png')} style={{ height: 80, width: null, flex: 1 }} />
  </View>
);
