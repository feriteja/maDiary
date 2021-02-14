import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as CustomCol from '../../theme/color.json';

export default function customTabIcon() {
  return (
    <View style={styles.container}>
      <Text>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    backgroundColor: CustomCol['color-info-400'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
});
