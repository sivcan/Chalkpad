import React, { Component } from 'react';
import { View } from 'react-native';
// import { Tabs, Tab, Icon } from 'react-native-elements';
import LibraryList from './LibraryList';

class Home extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#F04E45', flex: 1 }}>
                <LibraryList />
            </View>
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
