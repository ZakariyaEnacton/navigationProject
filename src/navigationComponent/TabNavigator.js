import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../screens/stackNavigationScreens/Home';
import Login from '../screens/stackNavigationScreens/Login';

const Top = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen name="Home" component={Home} />
        <Top.Screen name="Login" component={Login} />
      </Top.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
