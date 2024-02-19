import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Preferenze from './Preferenze';
import Dati from './Dati';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/Profilestyles';

type RootStackParamList = {
  Notification: undefined;
  Preferenze: undefined;
  Dati: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

// Import your image from the assets folder
const Profile = require('../assets/avatar.png');

export const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    // Navigate to the NotificationScreen when the bell icon is pressed
    navigation.navigate('Notification');
  };

  const handlePreferenzePress = () => {
    navigation.navigate('Preferenze');
  };

  const handleDatiPress = () => {
    navigation.navigate('Dati');
  };

  return (
    <View>
      <View style={globalStyles.header}>
        <View style={globalStyles.title}>
          <FontAwesome5 name="arrow-left" size={20} color="white" />
          <Text style={globalStyles.install}>Profile</Text>
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
            <Text style={globalStyles.datipersonali} onPress={handleDatiPress}>
              Dati Personali
            </Text>
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
                    size={17}
                    style={{gap: 10, lineHeight: 22}}
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
                    size={17}
                    style={{gap: 10, lineHeight: 22}}
                  />
                  <Text style={globalStyles.natalias}>
                    natalia@myvirtual.my
                  </Text>
                  <FontAwesome name="edit" style={globalStyles.editicon} />
                </View>
              </View>
            </View>
            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.password}>Password</Text>
                <View style={globalStyles.personalframe}>
                  <FontAwesome5
                    name="lock"
                    size={17}
                    style={{gap: 10, lineHeight: 22}}
                  />
                  <Text style={globalStyles.dots}>●●●●●●●●</Text>
                  <FontAwesome name="edit" style={globalStyles.editicons} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
