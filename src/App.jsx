import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

// import "./App.css";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [playerTurn, setPlayerTurn] = useState([]);

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
        <GameBoard
          onSelect={(rowIndex, colIndex) =>
            handleBoardSelect(rowIndex, colIndex)
          }
          turns={playerTurn}
        />
      </div>
      <Log turns={playerTurn} />
    </>
  );
}

export default App;
