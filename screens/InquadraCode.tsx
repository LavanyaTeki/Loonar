import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QRCodeScanner from './QRCodeScanner';

const logo = require('../assets/LOGO_loonar.png');
const Vector = require('../assets/Vector.png');

const INQUADRAQRCODE = () => {
  const navigation = useNavigation();
  const [showScanner, setShowScanner] = useState(false);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleScanButton = () => {
    setShowScanner(true);
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
      {/* <View style={styles.body}>
        {!showScanner ? (
          <View>
            <Text style={styles.QR}>
              INQUADRA IL QR CODE PER ACCEDERE RAPIDAMENTE
            </Text>
            <Button title="Scan QR Code" onPress={handleScanButton} />
          </View>
        ) : (
          <QRCodeScanner onClose={() => setShowScanner(false)} />
        )}
      </View> */}
      <View style={styles.body}>
        <View style={styles.welcome}>
          <View style={styles.titles}>
            <Text style={styles.QR}>
              INQUADRA IL QR CODEPER ACCEDERE RAPIDAMENTE
            </Text>
          </View>
          {!showScanner ? (
            <View>
              <TouchableOpacity onPress={handleScanButton}>
                <Image source={Vector} style={styles.vectorimage} />
              </TouchableOpacity>
            </View>
          ) : (
            <QRCodeScanner onClose={() => setShowScanner(false)} />
          )}
          <View style={styles.Disclaimer}>
            <Text style={styles.dolor}>
              Lorem ipsum dolor sit amet consectetur. Cursus tempus vitae lorem
              scelerisque. Eu odio sed lectus augue elementum elementum. Nunc
              enim ac sed commodo aliquam. Pharetra et sit et facilisi. Diam
              fringilla nullam a fringilla phasellus auctor orci netus.
            </Text>
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
  vectorimage: {
    width: 120.21,
    height: 120.21,
    top: 50,
    left: 120.38,
  },

  Disclaimer: {
    width: 359.51,
    height: 108,
    paddingTop: 180,
    paddingRight: 24,
    paddingLeft: 24,
    gap: 10,
  },
  dolor: {
    width: 311.51,
    height: 108,
    fontFamily: 'Caros',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.04,
    textAlign: 'center',
    color: '#7F7F7F',
  },
});
