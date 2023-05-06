import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/index';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigator;