import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { checkLogin } from '../../actions/AuthActions';
import { styles } from './styles';

export default function Chat() {

  const status = useSelector(state => state.auth.status);

  return (
    <View style={styles.container}>

    </View>
  );
}
