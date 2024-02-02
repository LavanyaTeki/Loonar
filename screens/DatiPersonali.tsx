import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {globalStyles} from '../styles/DatiPersonalistyles';

type RootStackParamList = {
  Notification: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

const DatiPersonali = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
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
          <Text style={globalStyles.install}>DatiPersonali</Text>
          <FontAwesome6
            name="bell"
            size={20}
            color="white"
            style={globalStyles.notification}
            onPress={handleNotificationPress}
          />
        </View>
      </View>
      <View style={globalStyles.heroheader}>
        <Text style={globalStyles.modifica}>Modifica email</Text>
        <Text style={globalStyles.puoi}>
          Puoi modificare questo indirizzo, che dovrai validare cliccando su un
          link che spediremo alla tua casella di posta. Nel frattempo, lorem
          ipsum dolor sit amet
        </Text>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.list}>
          <View style={globalStyles.personaldatacard}>
            <View style={globalStyles.titles}>
              <Text style={globalStyles.email}>Email</Text>
              <View style={globalStyles.personalframe}>
                <FontAwesome5
                  name="envelope"
                  size={17}
                  style={{gap: 10, lineHeight: 22}}
                />
                <Text style={globalStyles.natalias}>natalia@myvirtual.my</Text>
              </View>
            </View>
            <View style={globalStyles.frames}>
              <Text style={globalStyles.modi}>Modifica email</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DatiPersonali;
