import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  textLogo: {fontSize: 30, fontFamily: 'BeautifulPeople'},
});
