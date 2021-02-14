import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as themeColor from '../../theme/color.json';

export default function Link({
  text = 'link',
  cStyle,
  fStyle,
  onPress,
  ...props
}) {
  return (
    <TouchableOpacity onPress={onPress} style={cStyle}>
      <Text
        {...props}
        style={{...fStyle, color: themeColor['color-primary-400']}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
