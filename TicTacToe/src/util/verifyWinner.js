export function verifyWinner(board) {
  let possibilities = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];

  for (let i = 0; i < possibilities.length; i++) {
    const [x, y, z] = possibilities[i];
    const a = board[x];
    const b = board[y];
    const c = board[z];
    
    if (![a, b, c].includes('') && (a === b && a === c && b === c)) {
      return possibilities[i];
    }
  }

  return null;
};