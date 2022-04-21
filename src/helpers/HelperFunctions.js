// initialize a 9 x 9 matrix with given value
function initializeArray(value) {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => value)
  );
}

let sudokuInput = initializeArray("");

// setup for Input
function setArray(array, row, col) {
  sudokuInput[row][col] = array[row][col];
  return sudokuInput;
}

// convert array to sudoku array
function renderSudoku(array2) {
  let array = initializeArray(0);
  let k = 0,
    l = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      array[k][l] =
        +array2[i][j].length === 0 || isNaN(array2[i][j]) ? 0 : +array2[i][j];
      if (l === 2) {
        l = 0;
        k += 1;
      } else if (l === 5) {
        l = 3;
        k += 1;
      } else if (l === 8) {
        l = 6;
        k += 1;
      } else {
        l += 1;
      }
    }
    if (i >= 0) {
      k = 0;
    }
    if (i >= 2) {
      k = 3;
    }
    if (i >= 5) {
      k = 6;
    }
    l = l + 3 === 9 ? 0 : l + 3;
  }
  return array;
}

export { initializeArray, renderSudoku, setArray, sudokuInput };
