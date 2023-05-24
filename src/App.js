import classes from "./App.module.css";
import Square from "./components/Square";
import { useState } from "react";

function culateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = culateWinner(squares);
  let status;
  if (winner) {
    status = <b>Winner: <br></br> {winner}</b>;
  } else if (squares.includes(null)) {
    status = <b><br></br> {xIsNext ? "X" : "O"}</b>;
  } else {
    status = <b>Sorry! Its a tie</b>;
  }

  function handleClick(i) {
    if (squares[i] || culateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const reset = ()=>{
    setSquares(Array(9).fill(null));
  }
  return (
    <div className={classes.row}>
      <div className={classes.column}></div>
      <div className={classes.column}>
        <br></br>
        <div className={classes.status}>{status}</div>
        <br></br>
        <div className={classes.board}>
        <div className={classes.row}>
          <div className={classes.column1}>
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          {/* <br></br> */}
          <div className={classes.column1}>
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          {/* <br></br> */}
          <div className={classes.column1}>
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        </div><br></br>
        <button className={classes.playAgain} onClick={reset}>Play Again!</button>
      </div>
      <div className={classes.column} ></div>
      
    </div>
  );
}
// export default function Board() {

// }

export default App;
