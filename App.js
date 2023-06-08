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
import {Provider} from 'react-redux';
import data from './src/redux/store';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={data}>
        <AppNavigation />
        {/* <FormikExample /> */}
      </Provider>
    </View>
  );
};

export default App;
