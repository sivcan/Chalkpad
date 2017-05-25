import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

const InitialScreen = () => {
    const { backgroundImage } = styles;
    return (
            <TouchableWithoutFeedback onPress={() => Actions.main()}>
                <Image
                source={require('../../images/InitialScreen.png')}
                style={backgroundImage}
                />
            </TouchableWithoutFeedback>
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
