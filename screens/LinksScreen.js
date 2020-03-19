import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import Panel from '../components/Panel';

export default function LinksScreen() {
  return (
    <View style={[Styles.baseContainer, Styles.container]}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Panel title="Security instructions for host">
          <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title="Information for Airbnb hosts">
          <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title="Information for Booking.com hosts">
          <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Panel>
        <Panel title="Information for private hosts">
          <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          <Text style={{ marginBottom: 10 }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <TextInput
            placeholder="Host's name"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Host's email"
            style={styles.input}
            onChangeText={() => null}
          /> 
          <TextInput
            placeholder="Link to the reservation website"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Apartment's label"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Max number of guests"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Number of bedrooms"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Number of bathrooms"
            style={styles.input}
            onChangeText={() => null}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            onChangeText={() => null}
          />
          <Button
            onPress={() => null}
            title="Submit"
            color={Colors.tintColor}
            accessibilityLabel="Learn more about this purple button"
          />
        </Panel>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40, 
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
});