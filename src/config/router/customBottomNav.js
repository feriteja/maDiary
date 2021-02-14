import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as CustomCol from '../../theme/color.json';

const {width, height} = Dimensions.get('screen');

export default function customBottomNav({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const NavBut = ({route}) => {
    const {options} = descriptors[route.key];

    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const isFocused = state.index === state.routes.indexOf(route);

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };

    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };

    return (
      <TouchableOpacity
        style={styles.navBut}
        key={route.key}
        accessibilityRole="button"
        accessibilityState={isFocused ? {selected: true} : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={{flex: 1}}>
        <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
      </TouchableOpacity>
    );
  };

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: CustomCol['color-info-100'],
        backgroundColor: 'white',
        width: (width * 9) / 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,

        alignSelf: 'center',
        bottom: 40,
      }}>
      <NavBut route={state.routes[0]} />
      <NavBut route={state.routes[1]} />
      <NavBut route={state.routes[2]} />
      <NavBut route={state.routes[3]} />
      <NavBut route={state.routes[4]} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBut: {
    backgroundColor: 'red',
    marginTop: 20,
    position: 'absolute',
    bottom: 200,
  },
});
