export default function Log({ turns }) {
  return (
    <ul id="log">
      {turns.map((turn) => (
        <li key={`${turn.board.row}${turn.board.col}`}>
          {turn.player} has selected
          {` Row ${turn.board.row}, Column ${turn.board.col}`}
        </li>
      ))}
    </ul>
  );
}
