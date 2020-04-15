import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Routes from './src/routes';

export default function App() {
  
  let [fontsLoaded] = useFonts({
		'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
		'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf')
  });
  
  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  } else {
    return(
      <Routes />
    );
  }
}