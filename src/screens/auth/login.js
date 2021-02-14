import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Gap, Button, TextInput} from '../../components';

export default function login({navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.upperContent}>
        <Text style={[styles.textLogo]}>maDiary</Text>
      </View>
      <View style={styles.bottomContent}>
        <TextInput
          title="Username"
          placeholder={'username@user.com'}
          onChangeText={(a) => setUserName(a)}
        />
        <Gap height={10} />
        <TextInput
          title="Password"
          placeholder={'*********'}
          secret
          onChangeText={(a) => setPassword(a)}
        />
        <Gap height={15} />
        <Button
          text="Login"
          type={'primary'}
          onPress={() => navigation.reset({index: 0, routes: [{name: 'main'}]})}
        />
        <Gap height={10} />
        <Link
          text="Forgotten password?"
          cStyle={{alignSelf: 'center'}}
          onPress={() => navigation.push('forgot')}
        />
        <Gap height={20} />
        <Button
          text="Register"
          type={'success'}
          onPress={() => navigation.push('register')}
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bottomContent: {
    borderColor: 'rgba(0,0,0,.4)',
    borderWidth: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 2,
    marginTop: -30,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
  },
  textLogo: {fontSize: 30, fontFamily: 'BeautifulPeople'},
  textInput: {
    flexDirection: 'row',
  },
});
