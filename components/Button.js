import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

const Button = ({ label, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[ style, styles.button ]}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.tintColor,
        borderRadius: 4,
        alignItems: 'center',
        paddingVertical: 10,
        flex: 1,
    },
    label: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'baloo-regular',
    }
});

export default Button;