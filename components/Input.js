import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const Input = ({ onChangeText, value, style }) => {
    return (
        <View style={[style, styles.input, Styles.shadowCard]}>
            <TextInput
                placeholder="Find a suite for your quarantine..."
                onChangeText={onChangeText}
                value={value}
                style={[Styles.text, { width: '100%' }]}
                placeholderTextColor={Colors.lightText}
                selectionColor={Colors.text}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
                <Ionicons
                    name="md-locate"
                    size={30}
                    color={Colors.tintColor}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Input;