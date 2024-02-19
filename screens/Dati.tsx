import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  PixelRatio,
} from 'react-native'; // Import PixelRatio
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatiPersonali from './DatiPersonali';
import DatiPersonaliii from './DatiPersonaliii';

import Preferenze from './Preferenze';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {globalStyles} from '../styles/Datistyles';

type RootStackParamList = {
  Notification: undefined;
  Datipersonali: undefined;
  Datipersonaliii: undefined;
  Preferenze: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

// Import your image from the assets folder
const Profile = require('../assets/avatar.png');

const Dati = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleEditicon = () => {
    navigation.navigate('Datipersonali');
  };

  const handleEditicons = () => {
    navigation.navigate('Datipersonaliii');
  };

  const handlePreferenzePress = () => {
    navigation.navigate('Preferenze');
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View>
      <View style={globalStyles.header}>
        <View style={globalStyles.title}>
          <FontAwesome5
            name="arrow-left"
            size={20}
            color="white"
            onPress={handleClose}
          />
          <Text style={globalStyles.install}>Profile</Text>
          <FontAwesome6
            name="bell"
            size={20}
            color="white"
            style={globalStyles.notification}
          />
        </View>
      </View>
      <View style={globalStyles.hero}>
        <View style={globalStyles.avatar}>
          <View style={globalStyles.avatarframe}>
            <Image source={Profile} style={globalStyles.images} />
          </View>

          <View style={globalStyles.avatartitle}>
            <Text style={globalStyles.username}>Natalia Roitman</Text>
          </View>
        </View>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.nav}>
          <View style={globalStyles.dati}>
            <Text style={globalStyles.datipersonali}>Dati Personali</Text>
          </View>
          <View style={globalStyles.pre}>
            <Text
              style={globalStyles.preferenze}
              onPress={handlePreferenzePress}>
              Preferenze
            </Text>
          </View>
        </View>
        <View style={globalStyles.content}>
          <View style={globalStyles.cards}>
            <View style={globalStyles.personaldatacardone}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.Nome}>Nome e Cognome</Text>
                <View style={globalStyles.personalframe}>
                  <FontAwesome5
                    name="user-circle"
                    size={17 / PixelRatio.getFontScale()} // Adjust size based on PixelRatio
                    style={{
                      gap: 10 / PixelRatio.getFontScale(),
                      lineHeight: 22,
                    }}
                  />
                  <Text style={globalStyles.natalia}>Natalia Roitman</Text>
                </View>
              </View>
            </View>
            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.email}>Email</Text>
                <View style={globalStyles.personalframe}>
                  <FontAwesome5
                    name="envelope"
                    size={17 / PixelRatio.getFontScale()} // Adjust size based on PixelRatio
                    style={{
                      gap: 10 / PixelRatio.getFontScale(),
                      lineHeight: 22,
                    }}
                  />
                  <Text style={globalStyles.natalias}>
                    natalia@myvirtual.my
                  </Text>
                  <FontAwesome
                    name="edit"
                    onPress={handleEditicon}
                    style={globalStyles.editicon}
                  />
                </View>
              </View>
            </View>
            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.password}>Password</Text>
                <View style={globalStyles.personalframe}>
                  <FontAwesome5
                    name="lock"
                    size={17 / PixelRatio.getFontScale()} // Adjust size based on PixelRatio
                    style={{
                      gap: 10 / PixelRatio.getFontScale(),
                      lineHeight: 22,
                    }}
                  />
                  <Text style={globalStyles.dots}>●●●●●●●●</Text>
                  <FontAwesome
                    name="edit"
                    onPress={handleEditicons}
                    style={globalStyles.editicons}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dati;
