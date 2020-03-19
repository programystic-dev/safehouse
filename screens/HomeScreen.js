import * as React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../constants/Styles';
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
      <ScrollView style={Styles.container} contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <SuiteCard />
        <SuiteCard />
        <SuiteCard />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;