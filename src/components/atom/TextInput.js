import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-eva-icons';
import CustomCol from '../../theme/customColor';

export default function TextInputs({
  color,
  title = 'Title',
  placeholder = '',
  secret = false,
  onChangeText,
  ...props
}) {
  const [secure, setSecure] = useState(secret);
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef();
  const iconRef = useRef();

  const eyeClick = () => {
    iconRef.current?.startAnimation();
    setSecure((a) => !a);
  };

  return (
    <View style={{}}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInput(isFocused ? CustomCol.item : color)}>
        <TextInput
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          ref={inputRef}
          {...props}
          onChangeText={(text) => onChangeText(text)}
          style={{flex: 1}}
          placeholder={placeholder}
          secureTextEntry={secret}
        />
        <TouchableOpacity onPress={() => eyeClick()}>
          {secret && (
            <Icon
              ref={iconRef}
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              animation="zoom"
              fill={CustomCol.item}
              height={30}
              width={30}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,.6)',
    marginLeft: 4,
  },
  textInput: (color) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: color,
    borderWidth: 1,
    padding: 3,
    borderRadius: 10,
  }),
});
