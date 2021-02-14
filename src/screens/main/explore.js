import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MiniCard} from '../../components';

export default function explore() {
  const dataFlat = [...Array(11).keys()];

  const numColumns = 3;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={dataFlat}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingBottom: 80,
          }}
          columnWrapperStyle={{
            paddingVertical: 5,
            justifyContent: 'space-evenly',
          }}
          numColumns={numColumns}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <MiniCard />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 10,
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
