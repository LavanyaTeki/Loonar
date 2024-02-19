import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {globalStyles} from '../styles/Installingstyles';

type RootStackParamList = {
  Notification: undefined;
};

const Image17 = require('../assets/image17.png');
const Image18 = require('../assets/image18.png');

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;
type RouteProps = RouteProp<RootStackParamList, 'Notification'>;

export default function InstallingScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleNotificationPress = () => {
    // Navigate to the NotificationScreen when the bell icon is pressed
    navigation.navigate('Notification');
  };

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalAnimation] = React.useState(new Animated.Value(0));

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    //Toggle modal animation
    Animated.timing(modalAnimation, {
      toValue: isModalVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

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
        <TouchableOpacity onPress={toggleModal}>
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
        </TouchableOpacity>
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
      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => toggleModal()}>
        <Animated.View
          style={[globalStyles.modalContainer, {transform: [{translateY}]}]}>
          <View>
            <View style={globalStyles.body}>
              <View style={globalStyles.loonarhero}>
                <View style={globalStyles.loonarcard}>
                  <View style={globalStyles.loonartitle}>
                    <Text style={globalStyles.loonartext}>Loonar</Text>

                    <TouchableOpacity onPress={toggleModal}>
                      <MaterialIcons
                        name="close"
                        size={20}
                        color="white"
                        style={globalStyles.loonarclose}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={globalStyles.inputgroup}>
                    <View style={globalStyles.inputelement}>
                      <View style={globalStyles.inputslot}>
                        <FontAwesome
                          name="search"
                          style={globalStyles.search}
                        />
                        <Text style={globalStyles.cerca}>Cerca...</Text>
                        <FontAwesome5
                          name="arrow-right"
                          style={globalStyles.arrow}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={globalStyles.loonarcardcontainer}>
                <View style={globalStyles.loonarcardone}>
                  <View style={globalStyles.loonarcardlogo}>
                    <View style={globalStyles.logoimg}>
                      <Image source={Image17} style={globalStyles.imageone} />
                      <View style={globalStyles.description}>
                        <View style={globalStyles.loonarmain}>
                          <View style={globalStyles.loonarunit}>
                            <Text style={globalStyles.loonartexts}>
                              MyVirtuaLab
                            </Text>
                          </View>
                          <View style={globalStyles.loonarrole}>
                            <FontAwesome5
                              name="user"
                              style={globalStyles.loonaruser}
                            />
                            <Text style={globalStyles.loonarusers}>user</Text>
                          </View>
                          <View style={globalStyles.loonarcaption}>
                            <Text style={globalStyles.loonarultimo}>
                              ULTIMO ACCESSO:{' '}
                            </Text>
                            <Text style={globalStyles.loonarNov}>
                              Venerdì 14, Nov 2023
                            </Text>
                          </View>
                        </View>
                        <View style={globalStyles.loonartags}>
                          <View style={globalStyles.loonarbadge}>
                            <FontAwesome6
                              name="bell"
                              style={globalStyles.loonarbell}
                            />
                            <View style={globalStyles.loonarbades}>
                              <Text style={globalStyles.lorem}>
                                Lorem Ipsum
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={globalStyles.CTA}>
                        <FontAwesome
                          name="angle-right"
                          style={globalStyles.loonarangle}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={globalStyles.loonarcardone}>
                  <View style={globalStyles.loonarcardlogo}>
                    <View style={globalStyles.logoimg}>
                      <Image source={Image18} style={globalStyles.imageone} />
                      <View style={globalStyles.description}>
                        <View style={globalStyles.loonarmain}>
                          <View style={globalStyles.loonarunit}>
                            <Text style={globalStyles.loonartexttwo}>
                              Carma Advisory
                            </Text>
                          </View>
                          <View style={globalStyles.loonarrole}>
                            <FontAwesome5
                              name="user"
                              style={globalStyles.loonaruser}
                            />
                            <Text style={globalStyles.loonarsupplier}>
                              supplier
                            </Text>
                          </View>
                          <View style={globalStyles.loonarcaption}>
                            <Text style={globalStyles.loonarultimo}>
                              ULTIMO ACCESSO:{' '}
                            </Text>
                            <Text style={globalStyles.loonarNov}>
                              Venerdì 14, Nov 2023
                            </Text>
                          </View>
                        </View>
                        <View style={globalStyles.loonartags}>
                          <View style={globalStyles.loonarbadge}>
                            <FontAwesome6
                              name="bell"
                              style={globalStyles.loonarbell}
                            />
                            <View style={globalStyles.loonarbades}>
                              <Text style={globalStyles.lorem}>
                                Lorem Ipsum
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={globalStyles.CTA}>
                        <FontAwesome
                          name="angle-right"
                          style={globalStyles.loonarangle}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}
