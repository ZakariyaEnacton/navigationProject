import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/stackNavigationScreens/Login';
import Home from '../components/stackNavigationScreens/Home';

const Stack = createNativeStackNavigator();

const StackNavExample = () => {
  const btnPressed = () => {
    console.log('Button quit pressed');
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
        <Stack.Screen name="Login" component={Login} />
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
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavExample;
