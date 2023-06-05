import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../screens/drawerScreen/About';
import Home from '../screens/stackNavigationScreens/Home';

const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  console.log('props -------------: ', props);
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={Home}
        initialParams={props.route.params}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
