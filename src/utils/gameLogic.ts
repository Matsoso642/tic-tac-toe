// Type for each square
export type Square = "X" | "O" | null;

// All possible winning lines
export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Check board for winner
export function calculateWinner(squares: Square[]) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }
  return null;
}

// Strike-through styles for each winning line
export const STRIKE_STYLES = [
  { top: "50px", left: "0px", width: "300px", height: "6px" },
  { top: "150px", left: "0px", width: "300px", height: "6px" },
  { top: "250px", left: "0px", width: "300px", height: "6px" },
  { top: "0px", left: "50px", width: "6px", height: "300px" },
  { top: "0px", left: "150px", width: "6px", height: "300px" },
  { top: "0px", left: "250px", width: "6px", height: "300px" },
  {
    top: "148px",
    left: "-45px",
    width: "420px",
    height: "6px",
    transform: "rotate(45deg)",
  },
  {
    top: "148px",
    left: "-45px",
    width: "420px",
    height: "6px",
    transform: "rotate(-45deg)",
  },
];
