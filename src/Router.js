import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InitialScreen from './components/InitialScreen';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router
        navigationBarStyle={styles.navBar}
        titleStyle={{ color: '#FFFFFF' }}
        >
            <Scene key='welcome'>
                <Scene
                key='initializeApp'
                component={InitialScreen}
                hideNavBar
                title='Chalkpad'
                initial
                />
            </Scene>
            <Scene key='main'>
                <Scene
                key='loginUser'
                component={LoginForm}
                title='Chalkpad Login'
                hideNavBar={false}
                initial
                sceneStyle={{ paddingTop: 65 }}
                />
            </Scene>
        </Router>
    );
};

const styles = {
    navBar: {
        backgroundColor: '#F04E45',
    },
    barButtonTextStyle: {
        color: '#FFFFFF'
    },
    barButtonIconStyle: {
        tintColor: 'rgb(255,255,255)'
    }
};
export default RouterComponent;
