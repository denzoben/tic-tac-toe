import { useState } from "react";

export default function Player({ name, symbol, isSelected}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handlePlayerNameChange(event){
    setPlayerName(event.target.value);
  }

  let player = <h2 className="player-name">{playerName}</h2>;
  let btnValue = "Edit";
  if(isEditing){
    btnValue = "Save";
    player = <input type="text" onChange={handlePlayerNameChange} value={playerName} required/>
  }

  return (
    <>
      <li>
        {player}
        <h2 className="player-symbol">{symbol}</h2>
        <button onClick={handleClick}>{btnValue}</button>
      </li>
    </>
  );
}
