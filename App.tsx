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
import {ProfileScreen} from './screens/ProfileScreen';
import InstallingScreen from './screens/InstallingScreen';
import WalletScreen from './screens/WalletScreen';
import LoginScreen from './screens/LoginScreen';
import NotificationScreen from './screens/NotificationScreen';
import DatiPersonali from './screens/DatiPersonali';
import DatiPersonaliii from './screens/DatiPersonaliii';
import INQUADRAQRCODE from './screens/INQUADRAQRCODE';
import Preferenze from './screens/Preferenze';
import Dati from './screens/Dati';
import Preferenzeone from './screens/Preferenzeone';
import Preferenzetwo from './screens/Preferenzetwo';
import Preferenzethree from './screens/Preferenzethree';

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
    tabBarOptions={{
      style: {
        width: 345, // Set to Fill (345px)
        height: 68, // Fixed (20px)
        padding: 0, // 0px
        paddingHorizontal: 24, // 24px
        justifyContent: 'space-between',
        backgroundColor: '#EAEDF4', // Background color
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
              width: 20,
              height: 19,
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',

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
              width: 20,
              height: 19,
              fontWeight: '900',
              fontSize: 20,
              lineHeight: 20,
              textAlign: 'center',

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
              width: 20,
              height: 19,
              fontWeight: '900',
              fontSize: 20,
              lineHeight: 20,
              textAlign: 'center',

              color: '#2A3DAA',
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
          <MaterialIcons
            name="person"
            size={size}
            color={color}
            style={{
              width: 20,
              height: 19,
              fontWeight: '900',
              fontSize: 22,
              lineHeight: 20,
              textAlign: 'center',

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
      name="Datipersonali"
      component={DatiPersonali}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Datipersonaliii"
      component={DatiPersonaliii}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Inquadra"
      component={INQUADRAQRCODE}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Preferenze"
      component={Preferenze}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Dati" component={Dati} options={{headerShown: false}} />

    <Stack.Screen
      name="Preferenzeone"
      component={Preferenzeone}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Preferenzetwo"
      component={Preferenzetwo}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name="Preferenzethree"
      component={Preferenzethree}
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
