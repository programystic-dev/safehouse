import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Input, SuiteCard, StyledText } from '../components';

const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState('')
  return (
    <View style={[Styles.baseContainer, Styles.container]}>
      <Input
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        style={{ marginTop: 70 }}
      />
      <ScrollView style={Styles.container} contentContainerStyle={[Styles.scrollContainer, { marginTop: 20 }]} showsVerticalScrollIndicator={false}>
        {searchText.length === 0 ? (
          <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons
              name="ios-home"
              size={80}
              color={Colors.tintColor}
            />
            <Text style={[styles.logoText]}>safehouse</Text>
            <StyledText style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledText>
            <StyledText style={styles.infoText}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</StyledText>
          </View>
        ) : (
          <>
            <SuiteCard host="private" verified={true} />
            <SuiteCard host="airbnb" />
            <SuiteCard host="booking.com" />
          </>
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