import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {Gap} from '..';
import * as ThemeCol from '../../theme/color.json';
import CustomCol from '../../theme/customColor';

const date = new Date();
const dateFormated = date.toLocaleDateString();

export default function contentCard({
  source = require('../../assets/img/whitehair1.jpg'),
  cardTitle = 'myDiary Title',
  cardText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores  amet placeat ad, quae facere iure id quis! Laborum, atque dolorum.',
  cardDate = dateFormated,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 0.7,
        }}
      />
      <View style={styles.detailCard}>
        <View style={styles.titleCard}>
          <Icon
            name="calendar-outline"
            animation="zoom"
            fill={ThemeCol['color-primary-transparent-500']}
            height={35}
            width={35}
          />
          <View>
            <Text style={styles.titleCardText}>{cardTitle} </Text>
            <Text style={styles.dateInCard}>{cardDate}</Text>
          </View>
        </View>
        <Gap height={15} />
        <View style={styles.textShortCardContainer}>
          <Text style={styles.textCard} numberOfLines={2}>
            {cardText}
          </Text>
        </View>
      </View>
      <View style={styles.optionCard}>
        <View style={styles.circleInCard}>
          <Icon
            name="options-outline"
            width={35}
            height={35}
            fill="rgba(255,255,255,.9)"
          />
        </View>
        <View style={styles.circleInCard}>
          <Icon
            name="save-outline"
            width={35}
            height={35}
            fill="rgba(255,255,255,.9)"
          />
        </View>
        <View style={styles.circleInCard}>
          <Icon
            name="share-outline"
            width={35}
            height={35}
            fill="rgba(255,255,255,.9)"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 480,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  circleInCard: {
    padding: 5,
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 999,
  },

  detailCard: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionCard: {
    position: 'absolute',
    right: 0,
    top: 30,
    bottom: 30,
    width: 70,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(10,10,10,.3)',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
  },
  titleCard: {
    flexDirection: 'row',
  },
  titleCardText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
    textTransform: 'capitalize',
  },
  dateInCard: {
    color: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    // fontWeight: 'bold',
  },
  textShortCardContainer: {
    marginRight: 35,
  },
  textCard: {
    fontSize: 15,
    color: 'white',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
});
