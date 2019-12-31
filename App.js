import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => {
        return(
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => {
        <Icon name="search" color={tintColor} size={24} />
      }
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'Trips',
      tabBarIcon: ({ tintColor }) => {
        <Icon name="search" color={tintColor} size={24} />
      }
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => {
        <Icon name="search" color={tintColor} size={24} />
      }
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => {
        <Icon name="search" color={tintColor} size={24} />
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 3, height: 3 },
      shadowColor: 'black',
      elevation: 5,
      shadowOpacity: 0.5,
      marginBottom: 5,
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
