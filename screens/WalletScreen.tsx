import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {globalStyles} from '../styles/Walletstyles';

type RootStackParamList = {
  Notification: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

// Import your image from the assets folder
const tokenCoin = require('../assets/token-coin.png');
const tokenCoin2 = require('../assets/tokenCoin2.png');

export default function WalletScreen() {
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
          <Text style={globalStyles.install}>Wallet</Text>
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
        <View style={globalStyles.cardsone}>
          <Text style={globalStyles.textone}>Il mio Portafoglio</Text>
        </View>
        <View style={globalStyles.cardstwo}>
          <View style={globalStyles.cardsframe}>
            <Text style={globalStyles.texttwo}>Assets</Text>
          </View>
        </View>
        <View style={globalStyles.cardsthree}>
          <View style={globalStyles.walletcard1}>
            <View style={globalStyles.frameone}>
              <View style={globalStyles.imagetoken1}>
                <Image source={tokenCoin} style={globalStyles.tokencoin1} />
              </View>
              <View style={globalStyles.frameonetitle}>
                <Text style={globalStyles.crutoken}>CRU CRYPTOUNIT TOKEN</Text>
                <Text style={globalStyles.disponibile}>DISPONIBILE</Text>
                <View style={globalStyles.availabletoken}>
                  <View style={globalStyles.inputcard}>
                    <Text style={globalStyles.cru}>CRU</Text>
                    <FontAwesome5 name="eye" style={globalStyles.eye} />
                  </View>
                </View>
                <View style={globalStyles.frametwotitle}>
                  <View style={globalStyles.crutitle}>
                    <View style={globalStyles.legend}>
                      <Text style={globalStyles.comprato}>COMPRATO</Text>
                      <View style={globalStyles.badge}>
                        <Text style={globalStyles.onchain}>on chain</Text>
                      </View>
                    </View>
                    <Text style={globalStyles.numberscru}>1.000.000,8909 </Text>
                  </View>
                  <View style={globalStyles.crutitles}>
                    <View style={globalStyles.legends}>
                      <Text style={globalStyles.stacked}>STACKED</Text>
                      <View style={globalStyles.badge}>
                        <Text style={globalStyles.onchain}>on chain</Text>
                      </View>
                    </View>
                    <Text style={globalStyles.numberscru}>2.000,2000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={globalStyles.cardsthree}>
            <View style={globalStyles.walletcard1}>
              <View style={globalStyles.frameone}>
                <View style={globalStyles.imagetoken1}>
                  <Image source={tokenCoin2} style={globalStyles.tokencoin1} />
                </View>
                <View style={globalStyles.frameonetitle}>
                  <Text style={globalStyles.untb}>
                    UNTB UNIT TOKEN OF BLOCKCHAIN
                  </Text>
                  <Text style={globalStyles.disponibile}>DISPONIBILE</Text>
                  <View style={globalStyles.availabletoken}>
                    <View style={globalStyles.inputcard}>
                      <Text style={globalStyles.cru}>CRU</Text>
                      <FontAwesome5 name="eye" style={globalStyles.eye} />
                    </View>
                  </View>
                  <View style={globalStyles.frametwotitle}>
                    <View style={globalStyles.crutitle}>
                      <View style={globalStyles.legend}>
                        <Text style={globalStyles.comprato}>COMPRATO</Text>
                        <View style={globalStyles.badge}>
                          <Text style={globalStyles.onchain}>on chain</Text>
                        </View>
                      </View>
                      <Text style={globalStyles.numberscru}>
                        1.000.000,8909{' '}
                      </Text>
                    </View>
                    <View style={globalStyles.crutitles}>
                      <View style={globalStyles.legends}>
                        <Text style={globalStyles.stacked}>STACKED</Text>
                        <View style={globalStyles.badge}>
                          <Text style={globalStyles.onchain}>on chain</Text>
                        </View>
                      </View>
                      <Text style={globalStyles.numberscru}>2.000,2000</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
