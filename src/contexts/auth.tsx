import React, { createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api, { baseURL } from '../service/api';
import { useState } from 'react';

interface Signin {
  email: string;
  password: string;
}

interface Signup {
  name: string;
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
}

interface AuthContextData {
  isAuthenticated: boolean;
  loading: boolean;
  user: User;
  token: string | null;
  signIn({ email, password }: Signin): Promise<void>;
  signUp({ name, email, password }: Signup): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  //@ts-ignore
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;

        setUser(JSON.parse(storagedUser));
        setToken(JSON.parse(storagedToken));
        setLoading(false);
      }
    }

    loadStorageData();
  }, [token]);

  async function signIn({ email, password }: Signin) {
    const { data } = await api.post('sessions', { email, password });

    setUser(data.user);
    setToken(data.token);

    api.defaults.headers['Authorization'] = `Bearer ${data.token}`;

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(data.user));
    await AsyncStorage.setItem('@RNAuth:token', JSON.stringify(data.token));
  }

  async function signUp({ name, email, password }: Signup) {
    const { status } = await api.post('users', { name, email, password });

    if (status == 201) {
      await signIn({ email, password });
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    //@ts-ignore
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
        user,
        token,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
