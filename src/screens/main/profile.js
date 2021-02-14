import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {Gap} from '../../components';

export default function profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-ios-back-outline"
          height={30}
          width={30}
          fill="black"
        />
        <Text style={styles.headerTitle}>Arista Nova</Text>
        <Icon
          name="more-vertical-outline"
          height={30}
          width={30}
          fill="black"
        />
      </View>

      <View style={styles.avatar}>
        <View style={styles.avaraeImageContainer}>
          <Image
            source={require('../../assets/img/whitehair1.jpg')}
            style={styles.avatarImage}
          />
        </View>
        <Gap height={10} />
        <Text style={styles.textAlias}>@name_alias</Text>
      </View>

      <Text>profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avaraeImageContainer: {
    padding: 3,
    borderRadius: 999,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,.6)',
  },
  avatarImage: {
    height: 140,
    width: 140,
    borderWidth: 1,
    borderRadius: 999,
    borderColor: 'rgba(200,200,200,.3)',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerTitle: {fontWeight: 'bold', fontSize: 20},
  textAlias: {fontSize: 18, fontWeight: 'bold'},
});
