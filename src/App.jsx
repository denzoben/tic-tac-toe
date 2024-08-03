import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

// import "./App.css";
let PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(playerTurn) {
  let ActivePlayer = "X";

  if (playerTurn.length > 0 && playerTurn[0].player === "X") {
    ActivePlayer = "O";
  }

  return ActivePlayer;
}

function deriveGameBoard(playerTurn) {
  let updatedGameBoard = [
    ...initialGameBoard.map((innerArray) => [...innerArray]),
  ];

  for (const turn of playerTurn) {
    const { board, player } = turn;
    const { row, col } = board;
    updatedGameBoard[row][col] = player;
  }

  return updatedGameBoard;
}

function deriveWinner(gameBoard, playerTurn) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstsymbol = gameBoard[combination[0].row][combination[0].column];
    const secondsymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdsymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstsymbol &&
      firstsymbol === secondsymbol &&
      firstsymbol === thirdsymbol
    ) {
      winner = PLAYERS[firstsymbol];
    }
  }
  return winner;
}

function App() {
  const [playerTurn, setPlayerTurn] = useState([]);
  const gameBaord = deriveGameBoard(playerTurn);
  const winner = deriveWinner(gameBaord, playerTurn);
  const activePlayer = deriveActivePlayer(playerTurn);

  let draw = playerTurn.length === 9 && !winner;

  function matchRestart() {
    setPlayerTurn([]);
  }

  function handleBoardSelect(rowIndex, colIndex) {
    setPlayerTurn((prevTurn) => {
      const activePlayer = deriveActivePlayer(prevTurn);

      const updatedTurns = [
        { board: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  }

  function changePlayerName(symbol, name) {
    PLAYERS[symbol] = name;
  }

  return (
    <>
      <div id="game-container">
        <ul id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            name={PLAYERS.X}
            symbol="X"
            updatePlayerName={changePlayerName}
          />
          <Player
            isActive={activePlayer === "O"}
            name={PLAYERS.O}
            symbol="O"
            updatePlayerName={changePlayerName}
          />
        </ul>
        {(winner || draw) && (
          <GameOver matchReset={matchRestart} winner={winner} />
        )}
        <GameBoard onSelect={handleBoardSelect} board={gameBaord} />
      </div>
      <Log turns={playerTurn} />
    </>
  );
}

export default App;
