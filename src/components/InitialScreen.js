import React from 'react';
import { Image, StatusBar, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

const InitialScreen = () => {
    const { backgroundImage } = styles;
    return (
        <View style={{ flex:1 }}>
            <StatusBar backgroundColor='blue' barStyle='light-content' />
                <Image
                source={require('../../images/InitialScreen.png')}
                style={backgroundImage}
                >
                <CardSection style={{ marginTop: 408, backgroundColor: 'transparent', borderBottomWidth: 0 }}>
                    <Button onPress={() => Actions.login()} style={{  backgroundColor: 'transparent', borderColor: 'transparent', borderRadius: 50, }}>

                    </Button>
                </CardSection>
                </Image>
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
