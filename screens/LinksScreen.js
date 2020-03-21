import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Button, Panel, StyledText } from '../components';

export default function LinksScreen() {
  return (
    <View style={[Styles.baseContainer, Styles.container]}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Panel title="Security instructions for host">
          {securityInstructions()}
        </Panel>
        <Panel title="Information for Airbnb hosts">
          {platformHosts()}
        </Panel>
        <Panel title="Information for Booking.com hosts">
          {platformHosts()}
        </Panel>
        <Panel title="Information for private hosts">
          {form()}
        </Panel>
      </ScrollView>
    </View>
  );
}

const securityInstructions = () => (
  <>
    <StyledText>
      This panel contains the most important information about the requirements that apartments must meet
      to be used for quarantine and how the hosts should clean the property after guests leave.</StyledText>
  </>
);

const platformHosts = () => (
  <>
    <StyledText>
      This panel contains information on how hosts sharing a flat via a platform can add it to the list. 
    </StyledText>
  </>
);

const FormInput = ({ onChangeText, placeholder }) => (
  <TextInput
    placeholder={placeholder}
    style={styles.input}
    onChangeText={onChangeText}
    placeholderTextColor={Colors.lightText}
    selectionColor={Colors.text}
   />
);

const form = () => (
  <>
  <StyledText style={{ marginBottom: 10 }}>
    This panel contains information on how to add an apartment that is not available via supported platforms, and an application form.
  </StyledText>
          <FormInput
            placeholder="Host's name"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Host's email"
            onChangeText={() => null}
          /> 
          <FormInput
            placeholder="Link to the reservation website"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Apartment's label"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Max number of guests"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Number of bedrooms"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Number of bathrooms"
            onChangeText={() => null}
          />
          <FormInput
            placeholder="Address"
            onChangeText={() => null}
          />
          <Button
            onPress={() => null}
            label="Submit"
            style={{ marginTop: 10 }}
          />
  </>
);

const styles = StyleSheet.create({
  input: {
    color: Colors.text,
    fontFamily: 'baloo-regular',
    fontSize: 16,
    height: 50, 
    borderBottomColor: Colors.lightTintColor,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});