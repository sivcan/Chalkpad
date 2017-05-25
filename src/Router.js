import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InitialScreen from './components/InitialScreen';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

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
                animation='fade'
                initial
                />
            </Scene>
            <Scene key='login'>
                <Scene
                key='loginUser'
                animation='fade'
                component={LoginForm}
                title='Chalkpad Login'
                hideNavBar={false}
                initial
                sceneStyle={{ paddingTop: 65 }}
                />
            </Scene>
            <Scene key='main'>
                <Scene
                key='home'
                component={Home}
                title='Home'
                hideNavBar={false}
                sceneStyle={{ paddingTop: 65 }}
                initial
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
