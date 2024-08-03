export default function GameBoard({board, onSelect}) {

  return (
    <div id="game-board">
      <ol>
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}><button onClick={() => onSelect(rowIndex, colIndex)} disabled={playerSymbol && true}>{playerSymbol}</button></li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
