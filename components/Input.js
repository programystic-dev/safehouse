import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import StyledText from './StyledText';

const Input = ({ onChangeText, onIconPress, value, style }) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const ref = React.useRef();

    const chooseCity = () => {
        onChangeText('Poznań');
        setIsFocused(false);
        ref.current.blur();
    }

    return (
        <View style={style}>
        <View style={[ styles.input, Styles.shadowCard]}>
            <TextInput
                ref={ref}
                placeholder="Find a suite for your quarantine..."
                onChangeText={onChangeText}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                value={value}
                style={[Styles.text, { flex: 1, marginRight: 15 }]}
                placeholderTextColor={Colors.lightText}
                selectionColor={Colors.text}
                autoCorrect={false}
                autoCapitalize="none"
                clearButtonMode="unless-editing"
            />
            <TouchableOpacity onPress={onIconPress} style={{ marginLeft: 'auto' }}>
                <Ionicons
                    name="md-locate"
                    size={30}
                    color={Colors.tintColor}
                />
            </TouchableOpacity>
        </View>
        { (isFocused && value.length > 0) && (
            <View style={[ Styles.shadowCard, styles.dropdown ]}>
            <TouchableOpacity onPress={chooseCity} style={styles.dropdownItem}>
                <StyledText style={{ color: '#FFFFFF'}}>Poznań</StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={chooseCity} style={styles.dropdownItem}>
                <StyledText style={{ color: '#FFFFFF'}}>Warszawa</StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={chooseCity} style={styles.dropdownItem}>
                <StyledText style={{ color: '#FFFFFF'}}>Wrocław</StyledText>
            </TouchableOpacity>
            </View>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdown: {
        backgroundColor: Colors.lightText,
        paddingVertical: 10,
        top: 10,
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default Input;