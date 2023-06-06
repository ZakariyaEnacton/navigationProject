import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import formikStyle from '../style/fromikFromStyle';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Name must be contain atleast 6 char!')
    .max(50, 'Too Long!')
    .required('Please enter name'),
  email: Yup.string(`- /\S+@\S+\. \S+/`)
    .email('Invalid email')
    .required('Please enter email address'),
  password: Yup.string()
    .min(8)
    .required('Please enter password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must contain eight characters, at least 1 uppercase alphabetical character, The string must contain at least 1 lowercase alphabetical character, must contain at least one special character',
    ),
  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], `Password don't matched`)
    .required(`Field can't be empty`),
  mobile: Yup.string()
    .min(10, 'must enter 10 digits')
    .max(10, 'must enter 10 digits')
    .required('Please enter mobile number')
    .matches(/^[0-9]+$/, `Contain only digit`),
});

const FormikExample = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values =>
        console.log(
          // 'Values----------------------',
          // values,
          ' name---',
          values.name,
          ' email---',
          values.email,
          ' mobile---',
          values.mobile,
        )
      }>
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
      }) => (
        <View style={formikStyle.wrapper}>
          <View style={formikStyle.formContainer}>
            <Text style={formikStyle.title}>Sign Up</Text>
            <View style={formikStyle.inputWrapper}>
              <TextInput
                style={formikStyle.inputStyle}
                placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name && (
                <Text style={formikStyle.errorText}>{errors.name}</Text>
              )}
            </View>
            <View style={formikStyle.inputWrapper}>
              <TextInput
                style={formikStyle.inputStyle}
                placeholder="Email Address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <Text style={formikStyle.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={formikStyle.inputWrapper}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={formikStyle.inputStyle}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              {touched.password && errors.password && (
                <Text style={formikStyle.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={formikStyle.inputWrapper}>
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={true}
                style={formikStyle.inputStyle}
                value={values.confirmPassword}
                onBlur={() => setFieldTouched('confirmPassword')}
                onChangeText={handleChange('confirmPassword')}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={formikStyle.errorText}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
            <View style={formikStyle.inputWrapper}>
              <TextInput
                placeholder="Mobile No."
                style={formikStyle.inputStyle}
                value={values.mobile}
                onBlur={() => setFieldTouched('mobile')}
                keyboardType="phone-pad"
                onChangeText={handleChange('mobile')}
                maxLength={10}
              />
              {touched.mobile && errors.mobile && (
                <Text style={formikStyle.errorText}>{errors.mobile}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={[
                formikStyle.submitButton,
                {backgroundColor: !isValid ? '#a5c9ca' : '#395b64'},
              ]}>
              <Text style={formikStyle.submitBtnTxt}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default FormikExample;
