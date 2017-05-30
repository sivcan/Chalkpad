import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import {
  ThinRedLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
  },
  textStyle: {
      fontSize: 20,
      fontFamily: 'HelveticaNeue',
      marginTop: 30
  },
  textStyle2: {
      fontSize: 18,
      fontFamily: 'HelveticaNeue-Light',
      marginTop: 30
  }
});

export default ({ onPress }) => (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <Image source={require('../../images/tanvi.jpg')} style={{ height: 120, width: 90, marginTop: 5 }}/>
      <View>
        <ThinRedLine onPress={onPress} width={90} />
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={styles.textStyle}> Tanvi Mishra </Text>
        <Text style={styles.textStyle2}> UI/UX Developer </Text>
        <Text style={styles.textStyle3}> Electronics Engineer </Text>
      </View>
    </View>
  </View>
);
