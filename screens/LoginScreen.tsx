import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useAuth} from '../Auth/AuthContext';
import {globalStyles} from '../styles/Loginstyles';

interface LoginScreenProps {
  navigation: any;
}

interface FormValues {
  username: string;
  password: string;
  hidePassword: boolean;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {login} = useAuth();

  // Declare validation schema outside of useFormik
  const validationSchema = Yup.object({
    username: Yup.string().required('Devi completare questo campo'),
    password: Yup.string().required('Devi completare questo campo'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: '',
      hidePassword: true,
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      await login(values.username, values.password);
      navigation.navigate('AppTabs');
    },
  });

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.cardContainer}>
        <Text style={globalStyles.heading}>Benvenuto!</Text>

        <Text style={globalStyles.username}>Username</Text>

        <TextInput
          style={[
            globalStyles.input,
            //formik.errors.username &&
            formik.touched.username && globalStyles.errorInput,
          ]}
          placeholder="Inserisci il tuo nome utente"
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          value={formik.values.username}
        />

        {formik.errors.username && formik.touched.username ? (
          <Text style={globalStyles.errorText}>{formik.errors.username}</Text>
        ) : null}

        <View style={{marginVertical: 20}}>
          <View style={globalStyles.passwordContainer}>
            <Text style={globalStyles.password}>Password</Text>

            <TouchableHighlight
              onPress={() =>
                formik.setFieldValue(
                  'hidePassword',
                  !formik.values.hidePassword,
                )
              }>
              <Text style={globalStyles.smallpassword}>
                {formik.values.hidePassword
                  ? ' Hai dimenticato la password?'
                  : 'Nascondi'}
              </Text>
            </TouchableHighlight>
          </View>

          <TextInput
            style={[
              globalStyles.input,
              //formik.errors.password &&
              formik.touched.password && globalStyles.errorInput,
            ]}
            placeholder="Inserisci la password"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            secureTextEntry={formik.values.hidePassword}
          />
          {formik.errors.password && formik.touched.password ? (
            <Text style={globalStyles.errorText}>{formik.errors.password}</Text>
          ) : null}
        </View>
        <View>
          <TouchableHighlight
            onPress={formik.handleSubmit}
            style={globalStyles.button}
            underlayColor="#4169E1">
            <Text style={globalStyles.buttonText}>ACCEDI</Text>
          </TouchableHighlight>

          <View style={globalStyles.primarycontainer}>
            <Text style={globalStyles.primarytext}>
              By continuing you agree to our Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={globalStyles.Nonhai}>
          Non hai un account?
          <Text style={globalStyles.register}> Registrati</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
