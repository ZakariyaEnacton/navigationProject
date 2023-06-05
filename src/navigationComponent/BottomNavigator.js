import React from 'react';
import Screen2 from '../screens/bootomNavScreens/Screen2';
import Screen3 from '../screens/bootomNavScreens/Screen3';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DrawerNavigation from './DrawerNavigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import TabNavigator from './TabNavigator';

const BottomNavigator = props => {
  const Bottom = createMaterialBottomTabNavigator();
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="Screen1"
        component={DrawerNavigation}
        initialParams={props.route.params}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} />,
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={TabNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: () => <Icon name="setting" size={24} />,
        }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarIcon: () => <Icon name="profile" size={24} />,
          headerShown: false,
          tabBarLabel: 'Profile',
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
