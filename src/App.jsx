import { useState } from "react";

import Player from "./components/Player";

// import "./App.css";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player className="player" name="Player 1" symbol="X" />
        <Player className="player" name="Player 2" symbol="0" />
      </ol>
    </div>
  );
}

export default App;
