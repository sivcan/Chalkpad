import React, { Component } from 'react';
// import { Tabs, Tab, Icon } from 'react-native-elements';
import LibraryList from './LibraryList';

class Home extends Component {
    render() {
        return (
                <LibraryList />
        );
    }
}

// const styles = {
//     textStyle: {
//         color: '#FFFFFF',
//         fontSize: 20,
//         textAlign: 'center',
//         fontFamily: 'Helvetica-Light'
//     }
// };

export default Home;
