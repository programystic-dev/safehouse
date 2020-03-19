import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default Styles = StyleSheet.create({
  baseContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 20,
    paddingBottom: 20,
  },
  card: {
    padding: 20,
  },
  shadowCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 3,
  },
  whiteText: {
    color: '#FFFFFF'
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
  }
});