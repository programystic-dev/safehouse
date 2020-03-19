import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import SuiteCard from '../components/SuiteCard';

const HomeScreen = () => {
  const [searchText, setSearchText] = React.useState('')
  return (
    <View style={[Styles.baseContainer, Styles.container]}>
      <Input
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <ScrollView style={Styles.container} contentContainerStyle={[Styles.scrollContainer]} showsVerticalScrollIndicator={false}>
        {searchText.length === 0 ? (
          <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Ionicons
              name="ios-home"
              size={80}
              color={Colors.tintColor}
            />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: Colors.tintColor, fontSize: 36, marginBottom: 20 }}>safehouse</Text>
            <Text style={{ textAlign: 'center', marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text style={{ textAlign: 'center', marginBottom: 10 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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

export default HomeScreen;