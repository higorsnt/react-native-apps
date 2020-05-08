import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Lato': require('./assets/fonts/Lato-Regular.ttf')
  });

  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return (
      <Routes />
    );
  }
}