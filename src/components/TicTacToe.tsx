import { useState } from "react";
import Board from "./Board";
import {
  calculateWinner,
  WINNING_LINES,
  STRIKE_STYLES,
} from "../utils/gameLogic";
import "./../styles/TicTacToe.css";

// Type for each square: X, O, or empty
type Square = "X" | "O" | null;

// Empty board constant (9 nulls)
const EMPTY_BOARD: Square[] = Array(9).fill(null);

function TicTacToe() {
  // State: board squares
  const [squares, setSquares] = useState<Square[]>(EMPTY_BOARD);
  // State: whose turn it is
  const [isXNext, setIsXNext] = useState(true);

  // Check if someone has won
  const result = calculateWinner(squares);

  // Handle a square click
  function handleClick(index: number) {
    // Ignore clicks if game over or square already filled
    if (result || squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";

    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  // Reset the game
  function handleRestart() {
    setSquares(EMPTY_BOARD);
    setIsXNext(true);
  }

  // Status message above the board
  let status;
  if (result) {
    status = "Winner: " + result.player;
  } else if (squares.every((sq) => sq !== null)) {
    status = "It's a draw!";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  // Strike-through style if winner exists
  let strikeStyle = null;
  if (result) {
    const lineIndex = WINNING_LINES.findIndex(
      (line) => line.join() === result.line.join(),
    );
    strikeStyle = STRIKE_STYLES[lineIndex];
  }

  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>
      <p className="status">{status}</p>
      <Board
        squares={squares}
        onClick={handleClick}
        strikeStyle={strikeStyle}
      />
      <button className="restart-btn" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToe;
