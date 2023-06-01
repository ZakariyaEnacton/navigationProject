import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/stackNavigationScreens/Login';
import Home from '../screens/drawerNavigationScreens/Main';
import Main from '../screens/drawerNavigationScreens/Main';

const Stack = createNativeStackNavigator();

const StackNavExample = () => {
  const btnPressed = () => {
    console.log('Button pressed');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'lightblue',
          },
          headerTitleStyle: {fontSize: 20},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={btnPressed}
                  style={{
                    backgroundColor: 'darkgreen',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={{fontWeight: 500, color: '#fff'}}>Quit</Text>
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              backgroundColor: 'lightgreen',
            },
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavExample;
