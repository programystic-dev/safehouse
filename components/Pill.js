import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const Pill = ({ color, text }) => {
    return (
        <View style={[styles.pile, { position: "absolute", bottom: 10, left: 10, backgroundColor: color }]}>
            <Text style={[Styles.whiteText, { fontSize: 12 }]}>{text}</Text>
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
})

export default Pill;