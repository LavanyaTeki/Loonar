import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';

const logo = require('../assets/LOGO_loonar.png');
const Vector29 = require('../assets/Vector29.png');
const Vector28 = require('../assets/Vector28.png');

const INQUADRAQRCODE = () => {
  const navigation = useNavigation();
  const handleClose = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.title}>
          <Image source={logo} style={styles.logo} />
          <MaterialIcons
            name="close"
            size={20}
            color="white"
            style={styles.notification}
            onPress={handleClose}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.welcome}>
          <View style={styles.titles}>
            <Text style={styles.QR}>
              INQUADRA IL QR CODE PER ACCEDERE RAPIDAMENTE
            </Text>
          </View>
          <View style={styles.illustration}>
            <View style={styles.qrcode}>
              <Image style={styles.vector1} source={Vector29} />
              <Image style={styles.vector2} source={Vector28} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default INQUADRAQRCODE;

const styles = StyleSheet.create({
  // InstallingScreen: {
  //   width: 393,
  //   height: 852,
  //   top: 630,
  //   left: 1711.47,
  // },
  header: {
    //width: 393,
    height: 104,
    padding: 0,
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 24,
    backgroundColor: '#12208A',
  },
  title: {
    width: 305,
    height: 25,
    flexDirection: 'row',
    marginTop: 60,
  },
  logo: {
    width: 115,
    height: 25,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 25,
    letterSpacing: -0.4000000059604645,
    textAlign: 'left',
    left: 120,
  },
  notification: {
    left: 210,
    width: 40,
    height: 41,
    padding: 3,
  },
  body: {
    width: 393,
    height: 722,
    padding: 40,
    paddingTop: 40,
    paddingRight: 16,
    paddingBottom: 24,
    paddingLeft: 16,
    gap: 32,
  },
  welcome: {
    width: 361,
    height: 658,
  },
  titles: {
    width: 361,
    height: 58,
    justifyContent: 'space-between',
  },
  QR: {
    width: 361,
    height: 58,
    fontFamily: 'Caros',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 29,
    letterSpacing: -0.01,
    textAlign: 'center',
    color: '#495FC7',
  },
  illustration: {
    width: 272.96,
    height: 492,
    gap: 8,
  },
  qrcode: {
    width: 272.96,
    height: 272.96,
    borderStyle: 'solid',
    //borderBottomWidth: 4,
    borderColor: ' #798294',
    borderRadius: 8,
    flexDirection: 'row',
  },
  vector1: {
    width: 26.66,
    height: 26.66,
    top: 109.52,
    left: 26.66,
    borderWidth: 4,
    transform: [{rotate: '-180deg'}],
    //color: '#798294',
  },
  vector2: {
    width: 26.66,
    height: 26.66,
    top: 382.48,
    left: 26.66,
    borderWidth: 4,
    transform: [{rotate: '-180deg'}],
  },
});
