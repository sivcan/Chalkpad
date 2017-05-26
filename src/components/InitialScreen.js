import React from 'react';
import { Image, StatusBar, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

const InitialScreen = () => {
    const { backgroundImage } = styles;
    return (
        <View style={{ flex:1 }}>
            <StatusBar backgroundColor='#F04E45' barStyle='light-content' />
            <TouchableWithoutFeedback onPress={() => Actions.login()}>
                <Image
                source={require('../../images/InitialScreen.png')}
                style={backgroundImage}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        backgroundColor: 'transparent'
    }
};

export default InitialScreen;
