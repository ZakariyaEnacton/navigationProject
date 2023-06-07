import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/stackNavigationScreens/Login';
import BottomNavigator from '../navigationComponent/BottomNavigator';
import ReduxHome from '../screens/reduxScreens/ReduxHome';
import FormikExample from '../formik and yup/FormikExample';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FormikExample"
          component={FormikExample}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReduxHome"
          component={ReduxHome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
