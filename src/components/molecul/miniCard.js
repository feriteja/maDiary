import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const date = new Date();
const dateFormated = date.toLocaleDateString();

export default function miniCard() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/whitehair2.jpg')}
        style={{width: '100%', height: undefined, aspectRatio: 0.6}}
      />
      <View style={styles.status}>
        <Text style={{color: 'white'}}>{dateFormated}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 120,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  status: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,.3)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 90,
    alignSelf: 'center',
  },
});
