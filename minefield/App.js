import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Header from './src/components/Header';
import Minefield from './src/components/Minefield';
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
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  const [board, setBoard] = useState(
    createMinedBoard(cols, rows, minesAmount()),
  );
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  function reset() {
    setBoard(createMinedBoard(cols, rows, minesAmount()));
    setWon(false);
    setLost(false);
  }

  function minesAmount() {
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  function onOpenField(row, column) {
    const newBoard = cloneBoard(board);
    openField(newBoard, row, column);
    const lost = hadExplosion(newBoard);
    const won = wonGame(newBoard);

    if (lost) {
      showMines(newBoard);
      Alert.alert('Perdeeeeeu!', 'Que burro!');
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    setBoard(newBoard);
    setWon(won);
    setLost(lost);
  }

  function onSelectField(row, column) {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);
    const won = wonGame(newBoard);

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!');
    }

    setBoard(newBoard);
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
        onFlagPress={() => showLevelSelection(true)}
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={reset}
      />
      <View style={styles.board}>
        <Minefield
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
