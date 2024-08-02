export default function Player({ name, symbol }) {
  return (
    <>
      <li>
        <h2 className="player-name">{name}</h2>
        <h2 className="player-symbol">{symbol}</h2>
        <button>Edit</button>
      </li>
    </>
  );
}
