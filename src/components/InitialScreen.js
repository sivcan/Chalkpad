import React from 'react';
import { Image, TouchableWithoutFeedback, StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const InitialScreen = () => {
    const { backgroundImage } = styles;
    return (
        <View style={{ flex:1 }}>
            <StatusBar backgroundColor='blue' barStyle='light-content' />
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
        width: null
    }
};

export default InitialScreen;
