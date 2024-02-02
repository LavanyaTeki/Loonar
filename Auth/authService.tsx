// import axios, {AxiosError} from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_BASE_URL = ' https://betest.id.loonar.it:8091/public/login-original';
// const TOKEN_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.W3siY29kX3UiOjg0MDcsInVzZXJuYW1lIjoibGF2YW55YS50ZWtpIiwibm9tZSI6ImxhdmFueWEiLCJob3N0IjoidGVzdC5sb29uYXIuaXQiLCJjb2dub21lIjoidGVraSIsInRpcG8iOjMsImlkX2FjcXVpcmVudGUiOjE1LCJpZF9hY2NvdW50IjpudWxsLCJyZWRpcmVjdF91cmwiOm51bGwsInNhdmVfc2Vzc2lvbiI6MCwic2VjcmV0X3Rva2VuIjpudWxsfV03eHJhV0JEVVRSUTBLR0FIbC1zWFU2OFdm.61aXqySf3fbEa9dmwW9e2gEnMO1jG4tahukoHIau3_4';

// export const login = async (
//   username: string,
//   password: string,
// ): Promise<string | null> => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/login-original`, {
//       username,
//       password,
//     });
//     const token = response.data.token;

//     if (token) {
//       await storeToken(token);
//       setAuthToken(token);
//     }

//     return token;
//   } catch (error) {
//     handleLoginError(error as AxiosError); // Explicitly type error as AxiosError
//     return null;
//   }
// };

// const handleLoginError = (error: AxiosError): void => {
//   console.error('Login failed', error);

//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.error('Server responded with status:', error.response.status);
//     console.error('Response data:', error.response.data);
//   } else if (error.request) {
//     // The request was made but no response was received
//     console.error('No response received from the server');
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.error('Error setting up the request', error.message);
//   }
// };

// export const storeToken = async (token: string): Promise<void> => {
//   try {
//     await AsyncStorage.setItem(TOKEN_KEY, token);
//   } catch (error) {
//     console.error('Failed to store token', error);
//   }
// };

// export const getToken = async (): Promise<string | null> => {
//   try {
//     return await AsyncStorage.getItem(TOKEN_KEY);
//   } catch (error) {
//     console.error('Failed to get token', error);
//     return null;
//   }
// };

// export const setAuthToken = (token: string | null): void => {
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = 'https://betest.id.loonar.it:8091/public';
const LOGIN_ENDPOINT = 'login-original';
const TOKEN_KEY =
  'eyJhbGciOiJIUzI1NiJ9.W3siY29kX3UiOjg0MDcsInVzZXJuYW1lIjoibGF2YW55YS50ZWtpIiwibm9tZSI6ImxhdmFueWEiLCJob3N0IjoidGVzdC5sb29uYXIuaXQiLCJjb2dub21lIjoidGVraSIsInRpcG8iOjMsImlkX2FjcXVpcmVudGUiOjE1LCJpZF9hY2NvdW50IjpudWxsLCJyZWRpcmVjdF91cmwiOm51bGwsInNhdmVfc2Vzc2lvbiI6MCwic2VjcmV0X3Rva2VuIjpudWxsfV03eHJhV0JEVVRSUTBLR0FIbC1zWFU2OFdm.61aXqySf3fbEa9dmwW9e2gEnMO1jG4tahukoHIau3_4';

export const login = async (
  username: string,
  password: string,
): Promise<string | null> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${LOGIN_ENDPOINT}`, {
      username,
      password,
    });
    const token = response.data.token;

    if (token) {
      await storeToken(token);
      setAuthToken(token);
    }

    return token;
  } catch (error) {
    handleLoginError(error as AxiosError);
    return null;
  }
};

const handleLoginError = (error: AxiosError): void => {
  console.error('Login failed', error);

  if (error.response) {
    console.error('Server responded with status:', error.response.status);
    console.error('Response data:', error.response.data);
  } else if (error.request) {
    console.error('No response received from the server');
  } else {
    console.error('Error setting up the request', error.message);
  }
};

export const storeToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Failed to store token', error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to get token', error);
    return null;
  }
};

export const setAuthToken = (token: string | null): void => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
