import Square from "./Square";

type SquareType = "X" | "O" | null;

interface BoardProps {
  squares: SquareType[];
  onClick: (index: number) => void;
  strikeStyle: React.CSSProperties | null;
}

function Board({ squares, onClick, strikeStyle }: BoardProps) {
  return (
    <div className="board-wrapper">
      {/* Grid lines */}
      <div className="grid-line vertical" style={{ left: "100px" }} />
      <div className="grid-line vertical" style={{ left: "200px" }} />
      <div className="grid-line horizontal" style={{ top: "100px" }} />
      <div className="grid-line horizontal" style={{ top: "200px" }} />

      {/* Squares */}
      <div className="board">
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        ))}
      </div>

      {/* Strike-through line if winner */}
      {strikeStyle && <div className="strike" style={strikeStyle} />}
    </div>
  );
}

export default Board;
