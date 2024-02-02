import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {login, storeToken, setAuthToken, getToken} from './authService';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await getToken();
      if (storedToken) {
        setAuthToken(storedToken);
        setToken(storedToken);
      }
    };

    loadToken();
  }, []);

  const loginHandler = async (username: string, password: string) => {
    const newToken = await login(username, password);
    if (newToken) {
      await storeToken(newToken);
      setAuthToken(newToken);
      setToken(newToken);
    }
  };

  const logoutHandler = async () => {
    setAuthToken(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{token, login: loginHandler, logout: logoutHandler}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
