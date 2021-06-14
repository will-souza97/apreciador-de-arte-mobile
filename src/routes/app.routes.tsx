import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Comment from '../pages/private/Comment';
import Dashboard from '../pages/private/Dashboard';
import Gallery from '../pages/private/Gallery';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Galeria" component={Gallery} />
    <AppStack.Screen name="Comentarios" component={Comment} />
  </AppStack.Navigator>
);

export default AppRoutes;
