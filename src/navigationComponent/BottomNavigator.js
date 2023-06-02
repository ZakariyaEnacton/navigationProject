import React from 'react';
import Screen1 from '../screens/bootomNavScreens/Screen1';
import Screen2 from '../screens/bootomNavScreens/Screen2';
import Screen3 from '../screens/bootomNavScreens/Screen3';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const BottomNavigator = () => {
  const Bottom = createMaterialBottomTabNavigator();
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false, tabBarLabel: 'Setting'}}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{headerShown: false, tabBarLabel: 'Profile'}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
