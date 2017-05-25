import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { Spinner } from 'nachos-ui';
import TextField from 'react-native-md-textinput';
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
            return <View style={{ borderColor: '#F04E45', alignItems: 'center', flex: 1, justifyContent: 'center' }}><Spinner /></View>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} style={{ backgroundColor: '#FFFFFF', borderColor: '#F04E45', borderRadius: 35, borderWidth: 2 }}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <ScrollView style={{ marginLeft: 15, marginRight: 15 }}>
                        <TextField
                          height={40}
                          label={'Username'}
                          highlightColor={'#F04E45'}
                          onChangeText={this.onEmailChange.bind(this)}
                          value={this.props.email}
                          autoCapitalize={'none'}
                          autoCorrect={false}
                        />
                    </ScrollView>
                </CardSection>

                <CardSection>
                        <ScrollView style={{ marginLeft: 15, marginRight: 15 }}>
                            <TextField
                              height={40}
                              label={'Password'}
                              highlightColor={'#F04E45'}
                              secureTextEntry
                              onChangeText={this.onPasswordChange.bind(this)}
                              value={this.props.password}
                              autoCapitalize={'none'}
                              autoCorrect={false}
                            />
                        </ScrollView>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection style={{ alignItems: 'center', justifyContent: 'center' }}>
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

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);

// emailChanged is an action creator imported from actions.
// These functions get installed into the LoginForm
// console.log(props) to see how these functions are there in the props.
// and when we call them, they perform the actions etc.
