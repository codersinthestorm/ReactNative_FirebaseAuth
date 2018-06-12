import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
        >
            <Text style={styles.textStyle}>
                {text}
            </Text>
        </TouchableOpacity>
    );

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        flex: 1,
        borderRadius: 5,
        borderColor: '#007aaf',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
