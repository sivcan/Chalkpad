import React from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InitialScreen from './components/InitialScreen';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import ExampleList from './ExampleList';
import GatePass from './components/GatePass';

const TabIcon = ({ selected, title }) => {
    return(
        <Text style={{ color: selected? '#F04E45' : 'black', fontSize: 12, fontFamily: 'Helvetica-Light' }}>{title}</Text>
    );
};

const RouterComponent = () => {
    return (
        <Router
        navigationBarStyle={styles.navBar}
        titleStyle={{ color: '#FFFFFF' }}
        >
            <Scene
                key='initializeApp'
                component={InitialScreen}
                hideNavBar
                title='Chalkpad'
                initial
            />
            <Scene key='login'>
                <Scene
                key='loginUser'
                component={LoginForm}
                title='Chalkpad Login'
                hideNavBar={false}
                initial
                sceneStyle={{ paddingTop: 65 }}
                />
            </Scene>

            <Scene
            key='tabbar'
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
            >
                <Scene key='tab1' title='Home' icon={TabIcon}>
                        <Scene
                        key='home'
                        component={Home}
                        title='Home'
                        hideNavBar={false}
                        sceneStyle={{ paddingTop: 65 }}
                        initial
                        renderBackButton={() => (null)}
                        rightTitle='Logout'
                        onRight={() => {
                            firebase.auth().signOut();
                            Actions.initializeApp({ type: 'reset' });
                        }}
                        rightButtonTextStyle={{ color: '#FFFFFF' }}
                        />
                </Scene>
                <Scene key='tab4' title='Attendance' icon={TabIcon}>
                        <Scene
                        key='attendance'
                        component={Home}
                        title='Attendance'
                        sceneStyle={{ paddingTop: 65 }}
                        renderBackButton={() => (null)}
                        />
                </Scene>
                <Scene key='tab2' title='Gate Pass' icon={TabIcon}>
                        <Scene
                        key='gatepass'
                        component={GatePass}
                        title='Gate Pass'
                        hideNavBar={false}
                        sceneStyle={{ paddingTop: 65 }}
                        renderBackButton={() => (null)}
                        />
                </Scene>
                <Scene key='tab3' title='Marks' icon={TabIcon}>
                        <Scene
                        key='marks'
                        component={Home}
                        title='Marks'
                        sceneStyle={{ paddingTop: 65 }}
                        renderBackButton={() =>( null)}
                        />
                </Scene>

                <Scene key='tab5' title='Developer' icon={TabIcon}>
                        <Scene
                        key='initial7'
                        component={ExampleList}
                        title='About Developer'
                        sceneStyle={{ paddingTop: 65 }}
                        renderBackButton={() => (null)}
                        />
                </Scene>
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
