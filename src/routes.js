/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';

import Monitoring from '~/pages/Monitoring';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: {
          screen: createBottomTabNavigator(
            {
              HelpOrders: {
                screen: createStackNavigator(
                  {
                    Monitoring,
                  },
                  {
                    defaultNavigationOptions: {
                      headerTransparent: true,
                      headerTintColor: '#FFF',
                      headerLeftContainerStyle: {
                        marginLeft: 20,
                      },
                    },
                  }
                ),
                navigationOptions: {
                  tabBarLabel: 'Pedir ajuda',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={tintColor}
                    />
                  ),
                },
              },
            },
            {
              resetOnBlur: true,
              tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#EE4E62',
                inactiveTintColor: '#999999',
              },
            }
          ),
        },
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
