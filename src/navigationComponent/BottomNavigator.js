import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../screens/bootomNavScreens/Screen1';
import Screen2 from '../screens/bootomNavScreens/Screen2';
import Screen3 from '../screens/bootomNavScreens/Screen3';

const BottomNavigator = () => {
  const Bottom = createBottomTabNavigator();
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
