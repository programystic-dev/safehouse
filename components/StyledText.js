import * as React from 'react';
import { Text } from 'react-native';
import Styles from '../constants/Styles';

const StyledText = (props) => {
  return <Text {...props} style={[Styles.text, props.style]} />;
}

export default StyledText;