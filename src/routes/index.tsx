import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    <View>
      <ActivityIndicator size="large" color="#c1bccc" />
    </View>;
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
