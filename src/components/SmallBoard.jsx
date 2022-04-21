import React, { useState } from "react";
import {v4 as key} from "uuid";
import {
  initializeArray,
  renderSudoku,
  setArray,
  sudokuInput
} from "../helpers/HelperFunctions.js";
import solveSudoku, { isValid } from "../helpers/logic.js";

export default function SmallBoard(props) {
  const inputs = [];

  const [inputArray, setInputArray] = useState(initializeArray(""));
  const [flag, setFlag] = useState(true);

  // take Input
  function handleChange(event) {
    const { name, value } = event.target;
    let newInputArray = [...inputArray];
    newInputArray[name[0]][name[2]] = value;
    setArray(newInputArray, name[0], name[2]);
    setInputArray(newInputArray);
  }

  // show Output
  function output() {
    const sudoku = renderSudoku(sudokuInput);
    const valid = isValid(sudoku);
    if (valid) {
      const solvedSudoku = solveSudoku(sudoku)[1];
      const finalSudoku = renderSudoku(solvedSudoku);
      setInputArray(finalSudoku);
    } else {
      props.pop(true);
    }
  }

  // call Output on Button Click
  if (props.flag === flag) {
    output();
    setFlag(false);
  }

  for (let index = 0; index < 9; index++) {
    const name = [props.name, index];
    inputs.push(
      <input
      key={key()}
        className="box"
        size="1"
        name={name}
        value={inputArray[name[0]][name[1]]}
        onChange={handleChange}
      />
    );
  }

  return <div className="small-board">{inputs}</div>;
}
