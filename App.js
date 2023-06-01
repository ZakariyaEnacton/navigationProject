/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackNavExample from './src/navigationComponent/NativeStackNavExample';

const App = () => {
  return <StackNavExample />;
};

export default App;
