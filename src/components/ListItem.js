import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    // Whenever the component will re-render, this life cycle method will be called.
    componentWillUpdate() {
        LayoutAnimation.spring();
        //Optional :
        // LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.textStyle}>
                        ►  {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        //console.log(this.props);

        return (
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            • {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 16,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 15,
        paddingTop: 15,
        fontFamily: 'Helvetica-Light'
    },
    textStyle: {
        paddingLeft: 18,
        paddingBottom: 10,
        paddingRight: 18,
        paddingTop: 10,
        fontSize: 13,
        fontFamily: 'Helvetica-Light',
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    // console.log(expanded);
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

// Connect helper here is used to call an action creator.

// In the connect helper the first argument is strictly for mapStateToProps
// since we are not using that, that is why we are leaving it as null
// The second argument says,
// take these action creators (actions) and make sure whenever they are called
// the actions go to the right place and pass these actions down into the
// component as props. Here, the action will be passed to the ListItem.

// console.log(this.props) to see that the props now contain the selectLibrary function

// NOTES on ownProps
// ownProps are the props that were passed to the component that we are wrapping.
// So basically, these ownProps are actually the current props that this component
// holds right now.
// Here, we are passing the "library" as a prop to the ListeItem
// thus that is why we are writing "this.props.library" in render() function
// So it's simply that. :)
