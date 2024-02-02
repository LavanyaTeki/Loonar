import {StyleSheet, Text, View, GestureResponderEvent} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/Preferenzeonestyles';

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
        <Text style={globalStyles.notifichetitle}>
          Notifiche personalizzate
        </Text>
        <Text style={globalStyles.scegli}>
          Scegli come ricevere aggiornamenti sui messaggi e pomemoria.
        </Text>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.list}>
          <View style={globalStyles.frame27127}>
            <View style={globalStyles.PersonalDataCardOne}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.task}>Notifiche Task</Text>
                <View style={globalStyles.righticon}>
                  <FontAwesome5 name="toggle-on" style={globalStyles.toggle} />
                </View>
              </View>
            </View>
            <View style={globalStyles.PersonalDataCardOne}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.task}>Notifiche Email</Text>
                <View style={globalStyles.righticon}>
                  <FontAwesome5 name="toggle-on" style={globalStyles.toggle} />
                </View>
              </View>
            </View>
            <View style={globalStyles.PersonalDataCardOne}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.tasks}>Notifiche Richieste</Text>
                <View style={globalStyles.righticon}>
                  <FontAwesome5 name="toggle-on" style={globalStyles.toggle} />
                </View>
              </View>
            </View>
            <View style={globalStyles.PersonalDataCardOne}>
              <View style={globalStyles.frame27126}>
                <Text style={globalStyles.task}>Other options</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Preferenzeone;
