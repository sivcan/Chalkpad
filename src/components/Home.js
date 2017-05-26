import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';

class Home extends Component {
    render() {
        const { textStyle } = styles;
        return(
            <View style={{ flex:1, backgroundColor: '#F04E45' }}>
                <Text style={textStyle}> Section under development </Text>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Helvetica-Light'
    }
};

export default Home;
