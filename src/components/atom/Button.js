import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as themeColor from '../../theme/color.json';

export default function Button({
  text = 'button',
  type,
  onPress,
  cStyle,
  fStyle,
}) {
  const [color, setColor] = useState(themeColor['color-primary-500']);

  useEffect(() => {
    switch (type) {
      case 'danger':
        setColor(themeColor['color-danger-500']);
        break;
      case 'primary':
        setColor(themeColor['color-primary-500']);
        break;

      case 'success':
        setColor(themeColor['color-success-500']);
        break;

      default:
        setColor(themeColor['color-primary-500']);
        break;
    }
  }, [type]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        backgroundColor: color,
        paddingHorizontal: 4,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        ...cStyle,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          letterSpacing: 0.5,
          ...fStyle,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
