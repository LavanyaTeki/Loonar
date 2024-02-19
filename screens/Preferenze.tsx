import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Dati from './Dati';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/Preferenzestyles';

type RootStackParamList = {
  Notification: undefined;
  Preferenze: undefined;
  Dati: undefined;
  Preferenzeone: undefined;
  Preferenzetwo: undefined;
  Preferenzethree: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

const Profile = require('../assets/avatar.png');

const Preferenze = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleDatiPress = () => {
    navigation.navigate('Dati');
  };

  const handlePreferenzeone = () => {
    navigation.navigate('Preferenzeone');
  };

  const handlePreferenzetwo = () => {
    navigation.navigate('Preferenzetwo');
  };

  const handlePreferenzethree = () => {
    navigation.navigate('Preferenzethree');
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
            <Text style={globalStyles.datipersonali} onPress={handleDatiPress}>
              Dati Personali
            </Text>
          </View>
          <View style={globalStyles.pre}>
            <Text style={globalStyles.preferenze}>Preferenze</Text>
          </View>
        </View>
        <View style={globalStyles.content}>
          <View style={globalStyles.cards}>
            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.Notifiche}>Notifiche Push</Text>
                <View style={globalStyles.personalframe}>
                  <FontAwesome5
                    name="bell"
                    size={17}
                    style={{gap: 10, lineHeight: 24}}
                  />
                  <Text style={globalStyles.attiva}>Attiva</Text>
                  <FontAwesome
                    name="edit"
                    onPress={handlePreferenzeone}
                    style={globalStyles.editicon}
                  />
                </View>
              </View>
            </View>

            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.email}>
                  Autenticazione a 2 fattori
                </Text>
                <View style={globalStyles.personalframe}>
                  <Text style={globalStyles.natalias}>Non Attiva</Text>
                  <FontAwesome
                    name="edit"
                    onPress={handlePreferenzetwo}
                    style={globalStyles.editsicon}
                  />
                </View>
              </View>
            </View>
            <View style={globalStyles.personaldatacardtwo}>
              <View style={globalStyles.personaldatatitle}>
                <Text style={globalStyles.password}>lINGUA</Text>
                <View style={globalStyles.personalframe}>
                  <Fontisto
                    name="world"
                    size={17}
                    style={{gap: 10, lineHeight: 22}}
                  />
                  <Text style={globalStyles.dots}>Italiano</Text>
                  <FontAwesome
                    name="edit"
                    onPress={handlePreferenzethree}
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

export default Preferenze;
