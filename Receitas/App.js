import React from 'react';
import { View, StatusBar } from 'react-native';
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
      <View>
        <StatusBar
          translucent={true}
          barStyle='light-content'
          backgroundColor="transparent"
        />
        <Routes />
      </View>
    );
  }
}