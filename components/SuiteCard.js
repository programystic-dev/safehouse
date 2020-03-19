import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import Pill from './Pill';

const SuiteCard = ({ onChangeText, host, verified, value }) => {
    const renderPill = () => {
      if (host === 'airbnb') {
        return(
          <Pill text="Airbnb" color="#e74c3c" />
        );
      }

      if (host === 'booking.com') {
        return(
          <Pill text="Booking.com" color="#2980b9" />
        );
      }

      if (host === 'private') {
        return(
          <Pill text="Private host (verified)" color={Colors.tintColor} />
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
              <Text style={Styles.title}>Cosy apartment with a view</Text>
              <Text style={{ marginBottom: 10 }}>1-2 guests  ·  1 bed  ·  1 bathroom</Text>
              <Text>Poznań</Text>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
    },
});

export default SuiteCard;