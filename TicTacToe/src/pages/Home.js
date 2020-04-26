import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import Square from '../components/Square';
import X from '../components/X';
import O from '../components/O';
import { verifyWinner } from '../util/verifyWinner';

export default function Home() {

  const [board, setBoard] = useState(Array(9).fill(''));
  const [round, setRound] = useState(true);

  const symbol = round ? 'x' : 'o';
  const result = verifyWinner(board);
  const squaresBackground = defineBackground();
  const draw = !board.includes('');

  function defineBackground() {
    let squaresBackground = Array(9).fill('transparent');
    if (result) {
      squaresBackground[result[0]] = '#D3D3D3';
      squaresBackground[result[1]] = '#D3D3D3';
      squaresBackground[result[2]] = '#D3D3D3';
    }

    return squaresBackground;
  }

  function reset() {
    setBoard(Array(9).fill(''));
    setRound(true);
  }

  function renderSquare(i) {
    return (
      <Square
        style={[styles.horizontal, {
          backgroundColor: squaresBackground[i],
          borderTopWidth: ([0, 3, 6].includes(i)) ? 0 : 5,
        }]}
        value={board[i]}
        onPress={() => {
          if (board[i] === '' && !result) {
            let squares = board.slice();
            squares[i] = symbol;
            setRound(!round);
            setBoard(squares);
          }
        }}
      />
    );
  }

  function getResult() {
    if (result) {
      return `${board[result[0]].toUpperCase()} ganhou!`;
    } else if (draw) {
      return 'Empate!';
    } else {
      return '';
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <View style={[styles.vertical, { borderLeftWidth: 0 }]}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={[styles.vertical, { borderLeftWidth: 5, borderRightWidth: 5 }]}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={[styles.vertical, { borderLeftWidth: 0 }]}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <View style={styles.infoArea}>
        {
          (!result && !draw) && (
            <View style={styles.infoArea}>
              <Text style={styles.roundText}>Vez de: </Text>
              {symbol === 'x' && <X />}
              {symbol === 'o' && <O />}
            </View>
          )
        }

        {
          (result || draw) && (
            <View style={styles.infoArea}>
              <Text style={styles.roundText}>{getResult()}</Text>
            </View>
          )
        }
      </View>

      <View style={styles.buttonArea}>
        <TouchableHighlight underlayColor="#4169E1" style={styles.resetButton} onPress={reset}>
          <Text style={styles.textResetButton}>Reiniciar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  area: {
    width: 350,
    height: 400,
    flexDirection: 'row',
  },
  vertical: {
    flex: 1,
    borderLeftWidth: 5,
    borderColor: 'black',
  },
  horizontal: {
    flex: 1,
    borderTopColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoArea: {
    marginTop: 30,
    width: 220,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  roundText: {
    marginRight: 30,
    paddingBottom: 10,
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#1E90FF',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textResetButton: {
    color: 'white',
    fontSize: 18,
  }
});