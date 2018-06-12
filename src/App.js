import firebase from 'firebase';
import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Header from './components/common/Header';
import Spinner from './components/common/Spinner';
import Button from './components/common/Button';
import CardSection from './components/common/CardSection';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyDUXoIgC9ECmLdD0bjvPjcuBV3g4pi47CA',
                authDomain: 'authentication-5548a.firebaseapp.com',
                databaseURL: 'https://authentication-5548a.firebaseio.com',
                projectId: 'authentication-5548a',
                storageBucket: 'authentication-5548a.appspot.com',
                messagingSenderId: '1060426134810'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            text="Log Out"
                        />
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}
