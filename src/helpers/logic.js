/*
 Backtracking Algorithim was used for Solving Sudoku.
*/

// check if the given sudoku is valid or not
export function isValid(board) {
  let rows = [],
    cols = [],
    boxes = [];

  for (let index = 0; index < 9; index++) {
    rows.push({}), cols.push({}), boxes.push({});
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) continue;
      const n = parseInt(i / 3) * 3 + parseInt(j / 3);
      const m = parseInt(board[i][j]);
      rows[i][m] = rows[i][m] ? rows[i][m] + 1 : 1;
      cols[j][m] = cols[j][m] ? cols[j][m] + 1 : 1;
      boxes[n][m] = boxes[n][m] ? boxes[n][m] + 1 : 1;
      if (rows[i][m] > 1 || cols[j][m] > 1 || boxes[n][m] > 1) {
        return false;
      }
    }
  }

  return true;
}

// check if its safe to assign the value
function isSafe(board, x, y, val) {
  for (let k = 0; k < 9; k++) {
    if (board[k][y] === val || board[x][k] === val) {
      return false;
    }
  }

  let i = 0,
    j = 0;
  let edges = [0, 3, 6];
  while (!edges.includes(x - i)) {
    i += 1;
  }
  while (!edges.includes(y - j)) {
    j += 1;
  }

  for (let n = x - i; n < x - i + 3; n++) {
    for (let m = y - j; m < y - j + 3; m++) {
      if (board[n][m] === val) {
        return false;
      }
    }
  }

  return true;
}

// helper function that assigns the value recursively
function solveSudoku_Helper(board, x, y) {
  if (x >= 9 || y >= 9) {
    return [true, board];
  }

  if (board[x][y] !== 0) {
    if (y < 8) {
      return solveSudoku_Helper(board, x, y + 1);
    }
    return solveSudoku_Helper(board, x + 1, 0);
  }

  for (let index = 1; index < 10; index++) {
    if (isSafe(board, x, y, index)) {
      board[x][y] = index;
      let ans, newBoard;
      if (y < 8) {
        [ans, newBoard] = solveSudoku_Helper(board, x, y + 1);
      } else {
        [ans, newBoard] = solveSudoku_Helper(board, x + 1, 0);
      }
      if (ans) {
        return [ans, newBoard];
      }
      board[x][y] = 0;
    }
  }
  return [false, []];
}

// initiate the sudoku solving
export default function solveSudoku(board) {
  return solveSudoku_Helper(board, 0, 0);
}
