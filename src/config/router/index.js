import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Auth from './auth';
import Main from './main';

const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
