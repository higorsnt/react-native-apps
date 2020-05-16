import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Minefield from './src/components/Minefield';
import { createMinedBoard } from './src/functions';
import params from './src/params';

const App = () => {
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  const [board, setBoard] = useState(
    createMinedBoard(cols, rows, minesAmount()),
  );

  function minesAmount() {
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        <Minefield board={board} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default App;
