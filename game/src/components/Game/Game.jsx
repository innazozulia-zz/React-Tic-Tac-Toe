import React from "react";

import Board from "../Board/Board";
import { calculateWinner } from "../../helper";

import "./Game.css";

function Game() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  const [a, setA] = React.useState(0);

  const winner = calculateWinner(board);

  const handelClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return null;
    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    setA(a + 1);
    if (a === 7) {
      console.log(xIsNext + 1);
    }
  };
  // console.log(xIsNext);
  const game = () => {
    setBoard(Array(9).fill(null));
    setA(0);
  };
  const startNewGame = () => {
    return (
      <button className="start" onClick={() => game()}>
        Start New Game
      </button>
    );
  };

  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handelClick} />
      <p>Move: {a}</p>
      <p className="info">
        {winner ? "Winner: " + winner : "Now: " + (xIsNext ? "X" : "O")}
      </p>

      {/* <p>{t}</p> */}
    </div>
  );
}

export default Game;
