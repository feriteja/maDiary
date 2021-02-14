import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button, Gap} from '../../components';

export default function forgorPassword({navigation}) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.titlePage}>Reset Password</Text>
      </View>
      <Gap height={10} />
      <TextInput
        value={text}
        placeholder="username@mail.com"
        style={{
          alignSelf: 'stretch',
          // backgroundColor: 'red',
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 1,
          paddingVertical: 7,
        }}
        onChangeText={(a) => setText(a)}
      />
      <Gap height={10} />
      <Button text="Reset Password" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  titlePage: {fontSize: 30},
});
