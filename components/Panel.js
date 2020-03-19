import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import { FontAwesome } from '@expo/vector-icons';

const Panel = ({ children, title }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [height, setHeight] = React.useState(0);
    const animatedValue = new Animated.Value(0);
    const animatedHeight = React.useRef(animatedValue);

    const setHeightOnLayout = React.useCallback((event) => {
        setHeight(event.nativeEvent.layout.height);
    }, [setHeight, height]);

    const toggle = React.useCallback(() => {
        setExpanded(!expanded);
        Animated.timing(
            animatedHeight.current,
            {
                toValue: !expanded ? height : 0,
                duration: 1000,
            }
        ).start();
    }, [setExpanded, expanded, height]);

    return (
        <View style={[Styles.shadowCard, { marginBottom: 20 }]}>
            <TouchableOpacity style={styles.panelTitleContainer} onPress={toggle}>
                <Text style={styles.panelTitle}>{title}</Text>
                <FontAwesome
                    name={expanded ? "caret-up" : "caret-down"}
                    size={30}
                    style={{ marginLeft: 'auto' }}
                    color="grey"
                />
            </TouchableOpacity>
            <Animated.View style={styles.panelDescContainer}>
                <View onLayout={setHeightOnLayout}>
                    {children}
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    panelTitle: {
        fontSize: 20,
    },
    panelDescContainer: {
        padding: 20,
        paddingTop: 0,
    },
    panelTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default Panel;
