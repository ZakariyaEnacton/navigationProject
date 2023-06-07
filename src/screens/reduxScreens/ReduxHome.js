import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ReduxHome = ({route}) => {
  // const {name, email, password, confirmPassword, mobile} = route.params;
  // console.log('r-----', route.params);

  const getData = useSelector(state => state);
  console.log('----------', getData);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>
      <Text>{confirmPassword}</Text>
      <Text>{mobile}</Text>
    </View>
  );
};

export default ReduxHome;
