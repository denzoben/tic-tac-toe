import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

// import "./App.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [playerTurn, setPlayerTurn] = useState([]);
  

  let updatedGameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];
  let winner;

  for(const turn of playerTurn){
    const {board, player} = turn;
    const {row, col} = board;
    updatedGameBoard[row][col] = player;
  }

  for(const combination of WINNING_COMBINATIONS){
    const firstsymbol = updatedGameBoard[combination[0].row][combination[0].column];
    const secondsymbol = updatedGameBoard[combination[1].row][combination[1].column];
    const thirdsymbol = updatedGameBoard[combination[2].row][combination[2].column];

    if(firstsymbol && firstsymbol === secondsymbol && firstsymbol === thirdsymbol){
      winner = playerTurn[0].player;
    }
  }

  let draw = playerTurn.length === 9 && !firstsymbol;

  function matchRestart(){
    setPlayerTurn([]);
  }

  function handleBoardSelect(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "0" : "X"));

    setPlayerTurn((prevTurn) => [
      { board: { row: rowIndex, col: colIndex }, player: activePlayer },
      ...prevTurn,
    ]);

  }

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} name="Player 1" symbol="X" />
          <Player isActive={activePlayer === "0"} name="Player 2" symbol="0" />
        </ol>
        {(winner || draw) && <GameOver matchReset={matchRestart} winner={winner}/>}
        <GameBoard
          onSelect={(rowIndex, colIndex) =>
            handleBoardSelect(rowIndex, colIndex)
          }
          board={updatedGameBoard}
        />
      </div>
      <Log turns={playerTurn} />
    </>
  );
}

export default App;
