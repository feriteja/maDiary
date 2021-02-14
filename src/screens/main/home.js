import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import CustomCol from '../../theme/customColor';
import ThemeCol from '../../theme/color.json';
import customColor from '../../theme/customColor';
import {ContentCard, Gap} from '../../components';

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View
            style={{
              backgroundColor: ThemeCol['color-primary-700'],
              padding: 5,
              borderRadius: 999,
            }}>
            <Icon
              name="bar-chart-outline"
              animation="zoom"
              fill={ThemeCol['color-info-100']}
              height={20}
              width={20}
            />
          </View>
          <Icon
            name="save-outline"
            animation="zoom"
            fill={CustomCol.item}
            height={30}
            width={30}
          />
          <Icon
            name="calendar-outline"
            animation="zoom"
            fill={CustomCol.item}
            height={30}
            width={30}
          />
        </View>
        <View style={styles.headerRight}>
          <View style={styles.avatar}>
            <Image
              source={require('../../assets/img/whitehair1.jpg')}
              style={{
                height: 50,
                width: 30,
                resizeMode: 'contain',
              }}
            />
          </View>

          <Text>avatar</Text>
          <Icon
            name="checkmark-circle-2"
            animation="zoom"
            fill={ThemeCol['color-success-400']}
            height={20}
            width={20}
          />
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <Gap height={20} />}
          contentContainerStyle={{paddingBottom: 80}}
          data={[...Array(5).keys()]}
          renderItem={({item}) => {
            return <ContentCard />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 999,
    overflow: 'hidden',
    marginRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 10,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    width: 180,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
