import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {globalStyles} from '../styles/HomeStyles';

type RootStackParamList = {
  Notification: undefined;
  Wallet: undefined;
  Installing: undefined;
  Inquadra: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

const logo = require('../assets/LOGO_loonar.png');
const image = require('../assets/img.png');
const icons = require('../assets/icon.png');
const install = require('../assets/install.png');

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    // Navigate to the NotificationScreen when the bell icon is pressed
    navigation.navigate('Notification');
  };
  const handleWalet = () => {
    navigation.navigate('Wallet');
  };

  const handleinstalling = () => {
    navigation.navigate('Installing');
  };

  const handleQrcode = () => {
    navigation.navigate('Inquadra');
  };

  return (
    <View>
      <View style={globalStyles.header}>
        <View style={globalStyles.title}>
          <Image source={logo} style={globalStyles.logo} />
          <FontAwesome6
            name="bell"
            size={20}
            color="white"
            style={globalStyles.notification}
            onPress={handleNotificationPress}
          />
        </View>
      </View>
      <View style={globalStyles.hero}>
        <View style={globalStyles.cards}>
          <View style={globalStyles.body}>
            <View style={globalStyles.content}>
              <Text style={globalStyles.Nats}>Buongiorno Nats!</Text>
              <Text style={globalStyles.ipsum}>
                Lorem ipsum dolor sit amet consectetur. Cursus tempus vitae
                lorem scelerisque.{' '}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={globalStyles.bodys}>
        <View style={globalStyles.container}>
          <View style={globalStyles.inputgroup}>
            <View style={globalStyles.inputelement}>
              <View style={globalStyles.inputslot}>
                <FontAwesome name="search" style={globalStyles.search} />
                <Text style={globalStyles.cerca}>Cerca...</Text>
                <FontAwesome5 name="arrow-right" style={globalStyles.arrow} />
              </View>
            </View>
          </View>
          <View style={globalStyles.cardscontainer}>
            <View style={globalStyles.cardframe}>
              <View style={globalStyles.cardone}>
                <Image source={image} style={globalStyles.images} />
                <Text style={globalStyles.code} onPress={handleQrcode}>
                  INQUADRA QR CODE
                </Text>
              </View>
              <View style={globalStyles.cardtwo}>
                <View style={globalStyles.menuitem}>
                  <Image source={icons} style={globalStyles.icons} />
                </View>
                <Text style={globalStyles.my} onPress={handleWalet}>
                  My Wallet
                </Text>
              </View>
            </View>
            <View style={globalStyles.cardthree}>
              <View style={globalStyles.illustration}>
                <Image source={install} style={globalStyles.install} />
                <Text
                  style={globalStyles.installion}
                  onPress={handleinstalling}>
                  Istallazioni
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
