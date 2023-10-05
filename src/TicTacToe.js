import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("❌");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkWinner = (squares) => {
    if (winner) {
      return;
    }
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        console.log(squares[pattern[0]], "squares[pattern[0]]");

        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //not do anything here
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  console.log(cells);
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already Clicked");
      return;
    }
    let squares = [...cells];
    if (turn === "❌") {
      squares[num] = "❌";
      setTurn("⭕");
    } else {
      squares[num] = "⭕";
      setTurn("❌");
    }
    setCells(squares);
    checkWinner(squares);
  };
  const restart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };
  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)} className="table_data">
        {cells[num]}
      </td>
    );
  };

  return (
    <>
       <h1 className='header'>Tic Tac Toe</h1>
    <div className="container">
 
 <div className="row">
  <div className="col-6">
      <table className="ttt">
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      </div>
      <div className="col-6">
    {winner && (
        <>
          <h4> And the winner is '{winner}' <span className="congrat">Congratulations!💐</span></h4>
          <button className="playagain" onClick={() => restart()}>Play Again</button>
        </>
      )}
    </div>
      </div>
    </div>
    
    </>
  );
};

export default TicTacToe;