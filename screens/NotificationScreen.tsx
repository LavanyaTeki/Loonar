import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../styles/Notificationstyles';

// Import your image from the assets folder
const Savetime = require('../assets/Savetime.png');

const NotificationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={globalStyles.header}>
        <View style={globalStyles.title}>
          <Text style={globalStyles.install}>Notifiche</Text>
          <MaterialIcons
            name="close"
            size={20}
            color="white"
            style={globalStyles.notification}
            onPress={handleClose}
          />
        </View>
      </View>
      <View style={globalStyles.body}>
        <View style={globalStyles.illustration}>
          <Image source={Savetime} style={globalStyles.savetime} />
          <Text style={globalStyles.text}>
            Lorem Ipsum non c’è niente da vedere
          </Text>
        </View>
      </View>
      <View style={globalStyles.bodycontainer}>
        <View style={globalStyles.list}>
          <View style={globalStyles.notificationlist}>
            <View style={globalStyles.notifica}>
              <View style={globalStyles.belltitle}>
                <Text style={globalStyles.form}>
                  from istallazione Nome Lorem Ipsum
                </Text>
              </View>
              <View style={globalStyles.belldati}>
                <View style={globalStyles.frame455}>
                  <View style={globalStyles.iconright}>
                    <FontAwesome6
                      name="clock"
                      size={20}
                      style={globalStyles.clockicon}
                    />
                    <Text style={globalStyles.times}>time</Text>
                    <Text style={globalStyles.dates}>00 / data / data</Text>
                    <Text style={globalStyles.stato}>stato lorem</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={globalStyles.notifica}>
              <View style={globalStyles.belltitle}>
                <Text style={globalStyles.form}>BiteBooker Backend</Text>
              </View>
              <View style={globalStyles.belldati}>
                <View style={globalStyles.frame455}>
                  <View style={globalStyles.iconright}>
                    <FontAwesome6
                      name="clock"
                      size={20}
                      style={globalStyles.clockicon}
                    />
                    <Text style={globalStyles.times}>time</Text>
                    <Text style={globalStyles.dates}>00 / data / data</Text>
                    <Text style={globalStyles.stato}>stato lorem</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={globalStyles.notifica}>
              <View style={globalStyles.belltitle}>
                <Text style={globalStyles.form}>
                  Reparto Strategia e Sviluppo
                </Text>
              </View>
              <View style={globalStyles.belldati}>
                <View style={globalStyles.frame455}>
                  <View style={globalStyles.iconright}>
                    <FontAwesome6
                      name="clock"
                      size={20}
                      style={globalStyles.clockicon}
                    />
                    <Text style={globalStyles.times}>time</Text>
                    <Text style={globalStyles.dates}>00 / data / data</Text>
                    <Text style={globalStyles.stato}>stato lorem</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
