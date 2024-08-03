import { useState } from "react";

export default function Player({ name, symbol, isActive, updatePlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      updatePlayerName(symbol, playerName);
    }
  }

  function handlePlayerNameChange(event) {
    setPlayerName(event.target.value);
  }

  let player = <span className="player-name">{playerName}</span>;
  let btnValue = "Edit";
  if (isEditing) {
    btnValue = "Save";
    player = (
      <input
        type="text"
        onChange={handlePlayerNameChange}
        value={playerName}
        required
      />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {player}
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleClick}>{btnValue}</button>
        </span>
      </li>
    </>
  );
}
