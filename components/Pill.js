import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import { StyledText } from './';

const Pill = ({ color, text, style }) => {
    return (
        <View style={[styles.pile, style, { backgroundColor: color }]}>
            <StyledText style={styles.label}>{text}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    pile: {
        backgroundColor: Colors.tintColor,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    label: {
        fontSize: 12,
        fontFamily: 'baloo-medium',
        color: '#FFFFFF',
    },
});

export default Pill;