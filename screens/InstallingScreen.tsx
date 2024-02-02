import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {globalStyles} from '../styles/Installingstyles';

type RootStackParamList = {
  Notification: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

export default function InstallingScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    // Navigate to the NotificationScreen when the bell icon is pressed
    navigation.navigate('Notification');
  };
  return (
    <View>
      <View style={globalStyles.header}>
        <View style={globalStyles.title}>
          <FontAwesome5 name="arrow-left" size={20} color="white" />
          <Text style={globalStyles.install}>Installazioni</Text>
          <FontAwesome6
            name="bell"
            size={20}
            color="white"
            style={globalStyles.notification}
            onPress={handleNotificationPress}
          />
        </View>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.installationcard}>
          <View style={globalStyles.frameone}>
            <View style={globalStyles.frametitle}>
              <Text style={globalStyles.titleone}>Applicazione</Text>
              <Text style={globalStyles.secondtitle}>Loonar</Text>
            </View>
            <View style={globalStyles.frametitle2}>
              <Text style={globalStyles.secondtitletwo}>Installazioni</Text>
              <Text style={globalStyles.number}>12</Text>
            </View>
          </View>
        </View>
        <View style={globalStyles.card}>
          <View style={globalStyles.frametwo}>
            <View style={globalStyles.frametitle}>
              <Text style={globalStyles.titleone}>Applicazione</Text>
              <Text style={globalStyles.thridtitle}>Bitebooker</Text>
            </View>
            <View style={globalStyles.frametitle2}>
              <Text style={globalStyles.secondtitletwo}>Installazioni</Text>
              <Text style={globalStyles.number}>4</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
