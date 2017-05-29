import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
        // Take this list of libraries to render the data to the screen
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }
}

// mapStateToProps : The purpose of this function is
// to take our global state object and it will
// map it in some fashion.
// It will actually take some properties of the state object
// and provide it as props to the component LibraryList
// Thus, whatever is returned is actually a new argument
// to LibraryList, passed as props to library list. :)
const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
// What this syntax does is basically..
// First, it calls the function connect()
// Then, connect returns another function.
// Then we call that returned function with the LibraryList
