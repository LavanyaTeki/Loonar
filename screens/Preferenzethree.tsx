import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/Preferenzethreestyles';

type RootStackParamList = {
  Notification: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

const Preferenzeone = () => {
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
          <Text style={globalStyles.install}>Preferenze</Text>
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
        <Text style={globalStyles.lingua}>Lingua preferita</Text>
        <Text style={globalStyles.tua}>Scegli la tua lingua preferita.</Text>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.list}>
          <View style={globalStyles.frame27127}>
            <View style={globalStyles.PersonalDataCard}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.italia}>Italiano</Text>
                <View style={globalStyles.righticon}>
                  <FontAwesome6 name="check" style={globalStyles.check} />
                </View>
              </View>
            </View>
            <View style={globalStyles.PersonalDataCard}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.italia}>English</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Preferenzeone;
