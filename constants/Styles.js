import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default Styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 70,
    paddingBottom: 70,
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
  text: {
    fontFamily: 'baloo-regular',
    color: Colors.text,
    fontSize: 16,
  },
});