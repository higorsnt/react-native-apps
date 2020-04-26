import React from 'react';
import { View, TouchableHighlight } from 'react-native';

import X from './X';
import O from './O';

export default function Square({ value, style, onPress }) {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={onPress} style={style} >
      <View>
        {value === 'x' && <X />}
        {value === 'o' && <O />}
      </View>
    </TouchableHighlight>
  );
}