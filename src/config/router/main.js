import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBotNav from './customBottomNav';
import Feather from 'react-native-vector-icons/Feather';
import {Icon} from 'react-native-eva-icons';
import CustomIconBut from './customTabIcon';

import {
  AddPhoto,
  Explore,
  History,
  Home,
  PhotoDetail,
  Profile,
} from '../../screens/main';

const {width, height} = Dimensions.get('screen');

const Stack = createStackNavigator();
const BotTab = createBottomTabNavigator();

const mainBotNav = () => {
  return (
    <BotTab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        labelStyle: {fontSize: 14},
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        style: {
          position: 'absolute',
          alignItems: 'center',
          alignSelf: 'center',
          left: width / 15,
          right: width / 15,
          justifyContent: 'center',
          bottom: 30,
          backgroundColor: 'white',
          borderRadius: 20,
          elevation: 3,
        },
      }}
      // tabBar={(props) => <CustomBotNav {...props} />}
    >
      <BotTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <BotTab.Screen
        name="explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <BotTab.Screen
        name="addphoto"
        component={AddPhoto}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <CustomIconBut />
            </TouchableOpacity>
          ),
        }}
      />
      <BotTab.Screen
        name="history"
        component={History}
        options={{
          tabBarLabel: 'History',
        }}
      />
      <BotTab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </BotTab.Navigator>
  );
};

export default function ScreenStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={mainBotNav} />
      <Stack.Screen name="photodetail" component={PhotoDetail} />
    </Stack.Navigator>
  );
}
