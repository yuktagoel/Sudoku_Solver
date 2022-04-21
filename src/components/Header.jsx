import React from "react";

function Header() {
  return (
    <header
      onClick={() => {
        window.location.reload();
      }}
    >
      <h1>Sudoku Solver</h1>
    </header>
  );
}

export default Header;
