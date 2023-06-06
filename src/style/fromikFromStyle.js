import {StyleSheet} from 'react-native';

export default formikStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3333',
    paddingHorizontal: 15,
  },
  formContainer: {
    backgroundColor: '#f5eddc',
    padding: 20,
    borderRadius: 20,
    width: '100%',
  },
  title: {
    color: '#16213e',
    fontSize: 26,
    fontWeight: 400,
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    borderColor: '#16213e',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  submitButton: {
    backgroundColor: '#395b64',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
  },
});
