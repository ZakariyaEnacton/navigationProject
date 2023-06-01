import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {} from '@react-navigation/native';
import {} from '@react-navigation/native-stack';
import loginStyle from '../../style/loginComponentStyle';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={loginStyle.view}>
      <View style={loginStyle.viewWrapper}>
        <Text style={loginStyle.textHeading}>Login</Text>
        <View style={loginStyle.textInputView}>
          <TextInput
            onChangeText={e => setEmail(e)}
            value={email}
            style={[loginStyle.inputTextEmail, loginStyle.inputText]}
            placeholder="Email"
          />
          <TextInput
            onChangeText={p => setPass(p)}
            value={pass}
            secureTextEntry={true}
            style={[loginStyle.inputTextPass, loginStyle.inputText]}
            placeholder="Password"
          />
        </View>
        <View style={loginStyle.buttonView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={loginStyle.button}
            onPress={() =>
              props.navigation.navigate('Home', {email: email, pass: pass})
            }>
            <Text style={loginStyle.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
