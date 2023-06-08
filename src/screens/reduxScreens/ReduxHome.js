import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ReduxHome = props => {
  console.log('props-----', props);

  const getVal = useSelector(state => state);
  console.log(getVal);
  return (
    <View style={{flex: 1}}>
      {getVal.map(m => (
        <Text>Name : {m.name}</Text>
      ))}
      {getVal.map(m => (
        <Text>Email : {m.email}</Text>
      ))}
      {getVal.map(m => (
        <Text>Mobile : {m.mobile}</Text>
      ))}
    </View>
  );
};

export default ReduxHome;
