/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Monitoring from '~/pages/Monitoring';
import Profile from '~/pages/Profile';

import ListDevices from '~/pages/Devices/List';
import EditDevices from '~/pages/Devices/Edit';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Monitoring,
            Profile,
            Devices: {
              screen: createStackNavigator(
                {
                  ListDevices,
                  EditDevices,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#000',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Controladores',
                tabBarIcon: <Icon name="memory" size={22} color="#bbb" />,
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true, // teclado sobrepoe tabBar
              activeTintColor: '#7560ec',
              inactiveTintColor: '#bbb',
              labelStyle: {
                fontWeight: 'bold',
                marginTop: -5,
                marginBottom: 4,
              },
              style: {
                backgroundColor: '#fafafa',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
