import * as React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Input, SuiteCard, StyledText } from '../components';

const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState('')
  const [loading, setLoading] = React.useState(false);

  const locate = React.useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearchText('Poznań');
    }, 1500)
  }, [setLoading, setSearchText]);

  return (
    <View style={[Styles.baseContainer, Styles.container]}>
      <Input
        onChangeText={(text) => setSearchText(text)}
        onIconPress={locate}
        value={searchText}
        style={{ position: 'absolute', marginTop: 70, marginLeft: 20, width: '100%', zIndex: 1 }}
      />
      <ScrollView style={[Styles.container, { marginTop: 80 }]} contentContainerStyle={[Styles.scrollContainer]} showsVerticalScrollIndicator={false}>
        {(searchText.length === 0 && !loading) && (
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 120 }}>
            <Ionicons
              name="ios-home"
              size={80}
              color={Colors.tintColor}
            />
            <Text style={[styles.logoText]}>safehouse</Text>
            <StyledText style={styles.infoText}>
              Are you looking for a safe place for quarantine? Do not panic! We have a list of
              comfortable apartments for you, where you will be able to spend the next 2 weeks pleasantly. 
              Enter the city name or click the icon to check the area in your location.
            </StyledText>
          </View>
        )}

        {(searchText.length > 2 && !loading) && (
          <>
            <SuiteCard host="private" verified={true} />
            <SuiteCard host="airbnb" />
            <SuiteCard host="booking.com" />
          </>
        )}

        {(loading) && (
          <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator style={{ marginBottom: 20 }} />
            <StyledText>We are looking for your location...</StyledText>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  infoText: {
    textAlign: 'center', 
    marginBottom: 10,
  },
  logoText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'baloo-bold',
    color: Colors.tintColor,
    fontSize: 36,
    marginBottom: 20,
    marginTop: -15,
  },
})

export default HomeScreen;