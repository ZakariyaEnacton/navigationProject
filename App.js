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
import FormikExample from './src/formik and yup/FormikExample';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <AppNavigation /> */}
      <FormikExample />
    </View>
  );
};

export default App;
