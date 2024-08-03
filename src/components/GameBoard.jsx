const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({onSelect, turns}) {

  const updatedGameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for(const turn of turns){
    const {board, player} = turn;
    const {row, col} = board;
    updatedGameBoard[row][col] = player;
  }

  return (
    <div id="game-board">
      <ol>
        {updatedGameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}><button onClick={() => onSelect(rowIndex, colIndex)}>{playerSymbol}</button></li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
