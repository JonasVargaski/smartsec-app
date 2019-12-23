/* eslint-disable react/prop-types */
import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

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
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false, // esconde barra de navegação quando acessar esta rota
                tabBarLabel: 'Controladores',
                tabBarIcon: (
                  <Icon name="memory" size={20} color="rgba(255,255,255,0.6)" />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true, // teclado sobrepoe tabBar
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#666',
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
