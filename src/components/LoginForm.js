import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
// import { connect } from 'react-redux';
import { Spinner } from 'nachos-ui';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { Fumi } from 'react-native-textinput-effects';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                        <Input
                        label='Username'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        />
                </CardSection>

                <CardSection>
                        <Input
                        secureTextEntry
                        label='Password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return { email, password, error, loading };
};

export default LoginForm;
// connect(mapStateToProps, {
//     emailChanged,
//     passwordChanged,
//     loginUser
// })(LoginForm);

// emailChanged is an action creator imported from actions.
// These functions get installed into the LoginForm
// console.log(props) to see how these functions are there in the props.
// and when we call them, they perform the actions etc.
