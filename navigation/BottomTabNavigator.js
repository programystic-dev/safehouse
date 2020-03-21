import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        activeTintColor: Colors.tintColor,
        inactiveTintColor: Colors.lightText,
        labelStyle: {
          fontSize: 14,
          fontFamily: 'baloo-regular',
        },
        style: {
          height: 100,
          paddingTop: 15,
        },
      }}> 
      <BottomTab.Screen
        name="Find"
        component={HomeScreen}
        options={{
          title: 'Find suite',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-home" />,
          
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={LinksScreen}
        options={{
          title: 'Add suite',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
