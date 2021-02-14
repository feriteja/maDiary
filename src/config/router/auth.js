import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ForgotPassword, Login, Register} from '../../screens/auth';

const Stack = createStackNavigator();

export default function auth() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgot" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
