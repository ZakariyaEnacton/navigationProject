/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {View} from 'react-native';

import TabNavigator from './src/navigationComponent/TabNavigator';
import AppNavigation from './src/components/AppNavigation';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
};

export default App;
