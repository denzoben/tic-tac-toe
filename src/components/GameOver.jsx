export default function GameOver({ winner, matchReset }) {
  let isWinner = "Match Drawn!";
  if (winner) {
    isWinner = winner + " won";
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{isWinner}</p>
      <button onClick={matchReset}>Restart Match!</button>
    </div>
  );
}
