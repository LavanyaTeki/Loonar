import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthProvider} from './Auth/AuthContext';

// Screens
import {HomeScreen} from './screens/HomeScreen';
import InstallingScreen from './screens/InstallingScreen';
import WalletScreen from './screens/WalletScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationScreen from './screens/NotificationScreen';
import InquadraCode from './screens/InquadraCode';

import {CustomeNavigation} from './CustomeNavigation';

type TabParamList = {
  Home: undefined;
  Installing: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<TabParamList>();

const AppTabs: React.FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarInactiveBackgroundColor: '#EAEDF4',
      tabBarActiveBackgroundColor: '#ffffff',
      tabBarShowLabel: false,
      tabBarLabelStyle: {
        justifyContent: 'space-between',
        width: 345,
        height: 20,
        padding: 0,
        paddingTop: 0,
        paddingRight: 14,
        paddingBottom: 0,
        paddingLeft: 14,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome
            name="home"
            size={size}
            color={color}
            style={{
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',
              width: 44,
              height: 44,
              padding: 12,
              borderRadius: 4,
              gap: 10,

              color: '#2A3DAA',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Installing"
      component={InstallingScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome6
            name="building-circle-check"
            size={size}
            color={color}
            style={{
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',
              width: 44,
              height: 42,
              padding: 12,
              borderRadius: 4,
              gap: 10,

              color: '#2A3DAA',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <FontAwesome6
            name="wallet"
            size={size}
            color={color}
            style={{
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',
              width: 44,
              height: 44,
              padding: 12,
              borderRadius: 4,
              gap: 10,

              color: '#2A3DAA',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={CustomeNavigation}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons
            name="person"
            size={size}
            color={color}
            style={{
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',
              width: 44,
              height: 44,
              padding: 12,
              borderRadius: 4,
              gap: 10,

              color: '#2A3DAA',
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppStack: React.FC = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AppTabs"
      component={AppTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Inquadra"
      component={InquadraCode}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const AppNavigation: React.FC = () => (
  <AuthProvider>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  </AuthProvider>
);

export default AppNavigation;
