import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
    render() {
        const { textStyle } = styles;
        return(
            <View style={{ flex:1, backgroundColor: '#F04E45' }}>
                <Text style={textStyle}> Welcome to home </Text>
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
