import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/stackNavigationScreens/Home';
import Login from '../screens/stackNavigationScreens/Login';
import Screen2 from '../screens/bootomNavScreens/Screen2';
import ContactUs from '../screens/topTabNavScreens/ContactUs';
import Help from '../screens/topTabNavScreens/Help';

const Top = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="Settings" component={Screen2} />
      <Top.Screen name="Contact Us" component={ContactUs} />
      <Top.Screen name="Help" component={Help} />
    </Top.Navigator>
  );
};

export default TabNavigator;
