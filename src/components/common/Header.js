// import libraries
import React from 'react';
import { View, Text } from 'react-native';

// make component
const Header = ({ headerText }) => (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    );

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F7F8',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
