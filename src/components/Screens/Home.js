import {View, Text} from 'react-native';
import React from 'react';
import homeStyle from '../../style/homeComponentStyle';

const Home = () => {
  return (
    <View style={homeStyle.view}>
      <Text style={homeStyle.text}>Home Screen</Text>
    </View>
  );
};

export default Home;
