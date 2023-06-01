import {StyleSheet} from 'react-native';

export default loginStyle = StyleSheet.create({
  view: {
    flex: 1,
  },
  viewWrapper: {
    height: 400,
    justifyContent: 'center',
  },
  textHeading: {
    fontSize: 30,
    color: '#000',
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 20,
  },
  textInputView: {
    margin: 10,
  },
  inputText: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: '#000d',
  },
  inputTextEmail: {
    marginBottom: 10,
  },
  inputTextPass: {
    // marginBottom: 10,
  },
  buttonView: {margin: 10},
  button: {
    backgroundColor: '#0980F5',
    padding: 10,
    borderRadius: 10,
    marginLeft: 80,
    marginRight: 80,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
});
