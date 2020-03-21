import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Pill, StyledText } from './';

const SuiteCard = ({ host }) => {
    const renderPill = () => {
      if (host === 'airbnb') {
        return(
          <Pill text="Airbnb" color="#FF5A5F" style={styles.pill} />
        );
      }

      if (host === 'booking.com') {
        return(
          <Pill text="Booking.com" color="#003580" style={styles.pill} />
        );
      }

      if (host === 'private') {
        return(
          <Pill text="Private host" color={Colors.tintColor} style={styles.pill} />
        );
      }
    }
    return (
        <TouchableOpacity style={[Styles.shadowCard, { marginBottom: 20 }]}>
          <View style={{ borderTopLeftRadius: 4, borderTopRightRadius: 4, overflow: 'hidden' }}>
            <Image 
              source={{uri: 'https://image.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg'}}
              style={{width: '100%', height: 250}}
            />
            {renderPill()}
          </View>
          <View style={styles.card}>
              <StyledText style={styles.title}>Cosy apartment with a view</StyledText>
              <StyledText style={{ marginBottom: 5 }}>1-2 guests  ·  1 bed  ·  1 bathroom</StyledText>
              <StyledText>Poznań</StyledText>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    title: {
      fontSize: 26,
      fontFamily: 'baloo-medium',
      color: Colors.text,
    },
    pill: {
      position: "absolute",
      bottom: 10,
      left: 15,
    },
});

export default SuiteCard;