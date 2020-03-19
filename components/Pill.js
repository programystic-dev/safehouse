import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const Pill = () => {
    return (
        <View style={[styles.pile, { position: "absolute", bottom: 10, left: 10 }]}>
            <Text style={[Styles.whiteText, { fontSize: 12 }]}>Private host (verified)</Text>
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