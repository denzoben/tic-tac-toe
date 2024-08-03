import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

// import "./App.css";

function App() {

  return (
    <>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player  name="Player 1" symbol="X" />
          <Player  name="Player 2" symbol="0" />
        </ol>
        <GameBoard/>
      </div>
    </>
  );
}

export default App;
