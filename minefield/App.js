import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Header from './src/components/Header';
import MineField from './src/components/MineField';
import LevelSelection from './src/screens/LevelSelection';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';
import params from './src/params';

const App = () => {
  let cols = params.getColumnsAmount();
  let rows = params.getRowsAmount();

  const [board, setBoard] = useState(
    createMinedBoard(rows, cols, minesAmount()),
  );
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  function reset() {
    setBoard(createMinedBoard(rows, cols, minesAmount()));
    setWon(false);
    setLost(false);
    setShowLevelSelection(false);
  }

  function minesAmount() {
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  function onOpenField(row, column) {
    const clone = cloneBoard(board);
    openField(clone, row, column);
    const lost = hadExplosion(clone);
    const won = wonGame(clone);

    if (lost) {
      showMines(clone);
      Alert.alert('Perdeeeeeu!', 'Que coisa! Mas tente de novo!');
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    setBoard(clone);
    setWon(won);
    setLost(lost);
  }

  function onSelectField(row, column) {
    const clone = cloneBoard(board);
    invertFlag(clone, row, column);
    const won = wonGame(clone);

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    setBoard(clone);
    setWon(won);
  }

  function onLevelSelected(level) {
    params.difficultLevel = level;
    reset();
  }

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />
      <Header
        onFlagPress={() => setShowLevelSelection(true)}
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={reset}
      />
      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
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
