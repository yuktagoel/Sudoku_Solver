import React, { useState } from "react";
import {v4 as key} from "uuid";
import Button from "@material-ui/core/Button";
import SmallBoard from "./SmallBoard.jsx";
import Popup from "./Popup.jsx";

export default function Board() {
  const boards = [];
  let [flag, setFlag] = useState(false);               // render Solved Sudoku
  const [popup, setPopup] = useState(false);          // render Popup window

  function pop(bool) {
    setPopup(bool);
  }

  function handleClick() {
    setFlag(true);
  }

  for (let index = 0; index < 9; index++) {
    boards.push(
      <SmallBoard
      key={key()}
        name={index}
        flag={flag}
        pop={pop}
      />
    );
  }

  return (
    <div>
      <div className="board">{boards}</div>
      <Button
        variant="contained"
        color="secondary"
        className="Button"
        onClick={handleClick}
      >
        Solve
      </Button>
      <Popup show={popup} pop={pop} />
    </div>
  );
}
