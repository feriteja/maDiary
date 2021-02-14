import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, TextInput} from '../../components';

export default function register({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <Text style={styles.titlePage}>Register</Text>
      </View>
      <View style={styles.bottomContent}>
        <TextInput title="Name" placeholder="name" />
        <Gap height={10} />
        <TextInput title="Email" placeholder="username@mail.com" />
        <Gap height={10} />
        <TextInput secret title="Password" placeholder="********" />
        <Gap height={10} />
        <TextInput secret title="Confirm Password" placeholder="********" />
        <Gap height={15} />
        <Button
          type="success"
          text="Register"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContent: {
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    backgroundColor: 'white',
    flex: 1,
    borderColor: 'rgba(0,0,0,.4)',
    borderWidth: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    marginTop: -30,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  titlePage: {
    fontSize: 30,
  },
});
