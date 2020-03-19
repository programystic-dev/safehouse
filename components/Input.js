import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Feather } from '@expo/vector-icons';

const Input = ({ onChangeText, value }) => {
    return (
        <View style={[styles.input, Styles.shadowCard]}>
            <TextInput
                placeholder="Find a suite for your quarantine..."
                onChangeText={onChangeText}
                value={value}
            />
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
                <Feather
                    name="search"
                    size={30}
                    color={Colors.tintColor}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Input;