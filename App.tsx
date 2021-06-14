import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
