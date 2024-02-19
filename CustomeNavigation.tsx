import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DatiPersonali from './screens/DatiPersonali';
import DatiPersonaliii from './screens/DatiPersonaliii';
import Dati from './screens/Dati';
import Preferenze from './screens/Preferenze';
import Preferenzeone from './screens/Preferenzeone';
import Preferenzetwo from './screens/Preferenzetwo';
import Preferenzethree from './screens/Preferenzethree';
import {ProfileScreen} from './screens/ProfileScreen';

const Stack = createStackNavigator();

const CustomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Datipersonali"
        component={DatiPersonali}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Datipersonaliii"
        component={DatiPersonaliii}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Preferenze"
        component={Preferenze}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dati"
        component={Dati}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Preferenzeone"
        component={Preferenzeone}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Preferenzetwo"
        component={Preferenzetwo}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Preferenzethree"
        component={Preferenzethree}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {CustomeNavigation};
