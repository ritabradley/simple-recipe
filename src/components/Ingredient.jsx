export default function Ingredient({ name, amount }) {
  return (
    <li>
      <input type='checkbox' /> <strong className='font-black'>{amount}</strong>{' '}
      <span dangerouslySetInnerHTML={{ __html: name }} />
    </li>
  );
}
