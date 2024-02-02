import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/DatiPersonaliiistyles';

type RootStackParamList = {
  Notification: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

const DatiPersonali = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    // Navigate to the NotificationScreen when the bell icon is pressed
    navigation.navigate('Notification');
  };

  const handleClose = () => {
    navigation.goBack(); // Close the page when the close icon is clicked
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
        <Text style={globalStyles.modifica}>Modifica Password</Text>
        <Text style={globalStyles.puoi}>lorem ipsum dolor sit amet</Text>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.list}>
          <View style={globalStyles.personaldatacard}>
            <View style={globalStyles.titles}>
              <Text style={globalStyles.email}>Password</Text>
              <View style={globalStyles.personalframe}>
                <FontAwesome5
                  name="lock"
                  size={17}
                  style={{gap: 10, lineHeight: 22}}
                />
                <Text style={globalStyles.natalias}>●●●●●●●●</Text>
              </View>
            </View>
            <View style={globalStyles.frames}>
              <Text style={globalStyles.modi}>Modifica Password</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DatiPersonali;
