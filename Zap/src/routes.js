import React from 'react';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Preload from './pages/Home';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const Stack = createStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        gestureEnabled: true,
        transitionSpec: {
          open: TransitionSpecs.FadeInFromBottomAndroidSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        }
       }}>
        <Stack.Screen 
          name="Preload"
          component={Preload}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Chat"
          component={Chat}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
          options={{
            title: 'Cadastrar'
          }}
        />
        <Stack.Screen 
          name="Signin"
          component={Signin}
          options={{
            title: 'Login'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}