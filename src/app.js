import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
// import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyB4ibIcPoIIZb41uDFfM-klIroP8XsfGWY',
            authDomain: 'chalkpad-dc070.firebaseapp.com',
            databaseURL: 'https://chalkpad-dc070.firebaseio.com',
            projectId: 'chalkpad-dc070',
            storageBucket: 'chalkpad-dc070.appspot.com',
            messagingSenderId: '594801643540'
          };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // 1st argument is for reducers
        // 2nd argument is for any initial state that we might want to pass.
        // Maybe we want to prepopulate with some data.
        // 3rd argument is called 'store enhancers'
        // It basically adds an additional functionality to the store.
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

// npm install react-native-md-textinput

// npm install react-native-vector-icons --save

// npm install --save lodash
