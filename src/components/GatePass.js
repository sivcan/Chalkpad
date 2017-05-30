import React, { Component } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Spinner, RadioGroup } from 'nachos-ui';
import TextField from 'react-native-md-textinput';
// import Entypo from 'react-native-vector-icons/Entypo';
// import { Fumi } from 'react-native-textinput-effects';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
    state = { value: null };

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
    }
    renderButton() {
        if (this.props.loading) {
            return <View style={{ borderColor: '#F04E45', alignItems: 'center', flex: 1, justifyContent: 'center' }}><Spinner size={32} /></View>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}
            style={{ backgroundColor: '#FFFFFF', borderColor: '#F04E45', borderRadius: 35, borderWidth: 2 }}>
                Apply GatePass
            </Button>
        );
    }

    render() {
        const { date } = new Date();
        return (
            <Card style={{ borderColor: 'transparent', borderBottomWidth: 0, shadowOpacity: 0, marginTop: 15 }}>
                <CardSection style={{ borderBottomWidth: 0, borderColor: '#fff', paddingBottom: 10 }}>
                    <ScrollView style={{ marginLeft: 15, marginRight: 15 }}>
                        <TextField
                          height={40}
                          label={'Leave Required From'}
                          highlightColor={'#F04E45'}
                          onChangeText={this.onEmailChange.bind(this)}
                          value={this.props.email}
                          autoCapitalize={'none'}
                          autoCorrect={false}
                        />
                    </ScrollView>
                </CardSection>

                <CardSection style={{ borderBottomWidth: 0, borderColor: '#fff', paddingTop: 10, paddingBottom: 5, shadowOpacity: 0, marginBottom: 15 }}>
                        <ScrollView style={{ marginLeft: 15, marginRight: 15 }}>
                            <TextField
                              height={40}
                              label={'Reason'}
                              highlightColor={'#F04E45'}
                              onChangeText={this.onPasswordChange.bind(this)}
                              value={this.props.password}
                              autoCapitalize={'none'}
                              autoCorrect={false}
                            />
                        </ScrollView>
                </CardSection>
                <CardSection style={{ borderBottomWidth: 0, borderColor: '#fff', paddingTop: 10, paddingBottom: 5, shadowOpacity: 0, marginLeft: 10, marginBottom: 15 }}>
                    <RadioGroup
                      onChange={value => this.setState({ value })}
                      defaultSelected='gr'
                      options={['Full Day', 'Partial Time']}
                    />
                </CardSection>
                <CardSection style={{ alignItems: 'center', justifyContent: 'center', shadowOpacity: 0, paddingBottom: 10 }}>
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
    },
    imageStyle: {
        flex: 1,
        height: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        width: null
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
