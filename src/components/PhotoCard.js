import React from 'react';

import {
  View,
  Image
} from 'react-native';

export default () => (
  <View style={{ flex: 1 }}>
    <Image source={require('../../images/Details.png')} style={{ height: 80, width: null, flex: 1 }} />
  </View>
);
