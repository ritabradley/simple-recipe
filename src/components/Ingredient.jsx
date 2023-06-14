export default function Ingredient({ name, amount }) {
  return (
    <li>
      <strong>{amount}</strong> {name}
    </li>
  );
}
