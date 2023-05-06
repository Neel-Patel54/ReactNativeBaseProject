import React from 'react';
import { Text ,View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../utils/validations';
import {handleLogin} from '../../redux/auth/index';
import CommonTextInput from '../../components/CommonTextInput';
import CommonButton from '../../components/CommonButton';
import {styles} from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const initialFormState = {
    email: '',
    password: ''
  };

  const handleLoginDetails = (values) => {
    console.log(values);
    dispatch(handleLogin(values));
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Login</Text>
      <Formik
        initialValues={initialFormState}
        validationSchema={loginValidationSchema}
        onSubmit={values => handleLoginDetails(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
          <>
            <CommonTextInput
              name="email"
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            }
            <CommonTextInput
              name="password"
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            }
            <CommonButton
              title="Login"
              onPress={handleSubmit}
              disabled={false}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
