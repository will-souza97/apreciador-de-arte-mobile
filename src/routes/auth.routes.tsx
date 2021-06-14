import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../pages/public/Signin';
import SignUp from '../pages/public/Signup';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
